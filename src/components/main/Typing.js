import React, { useEffect, useState } from 'react';

function Typing({ text, typingSpeed = 100, deletingSpeed = 150, duration = 1000 }) {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayText.length < text[index].length) {
                    setDisplayText(prev => prev + text[index].charAt(displayText.length));
                } else {
                    setTimeout(() => setIsDeleting(true), duration);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(prev => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setIndex((index + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]);

    return (
        <div className="Typing-Effect">
            <h3 className='typewriter-front'>and I'm a <span>{displayText}</span></h3>
            
        </div>
    );
}

export default Typing;
