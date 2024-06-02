import React from 'react';
import './contacts.css';
import { Link } from 'react-router-dom';
import 'boxicons';

function Contacts() {
    return (
        <div>
            

            <div className="contact-container">
            
            <div className="contact">
                
                        <div className="first-text">Let's connect</div>
                        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6b8a0699093857.5eeafdd995e46.gif' alt="connect" class='image' />
                        <div className="social-links">
                            <span className="second-text">
                                Connect us with:
                            </span>
                            <ul className="social-media">
                                <li><a href=''><box-icon type='logo' name='facebook-circle'></box-icon></a></li>
                                <li><a href=''><box-icon type='logo' name='twitter'></box-icon></a></li>
                                <li><a href='https://www.instagram.com/ddev.mhrn_7/'><box-icon type='logo' name='instagram'></box-icon></a></li>
                                <li><a href='https://www.linkedin.com/in/debashis-m-990179205/'><box-icon type='logo' name='linkedin-square'></box-icon></a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="submit-form">
                        <h3 className='third-text'> Contact us</h3>
                        <div className="submit-container">
                            <form action=''>
                                <div className="input-box">
                                    <input type="text" name="name" id="name" className='input'  />
                                    <label for="">Name </label>
                                </div>
                                <div className="input-box">
                                    <input type="email" name="name" id="name" className='input'   />
                                    <label for="">Email </label>
                                </div>
                                <div className="input-box">
                                    <input type="tel" name="name" id="name" className='input'  />
                                    <label for="">Phone </label>
                                </div>
                                <div className="input-box">
                                    <textarea  id="message"  className='input' cols="30" rows='10'  />
                                    <label for="">Message </label>
                                </div>
                            </form>
                            <button className='submit'>Submit</button>
                        </div>



                    </div>

            </div>
        </div>
    )
}
export default Contacts;