import React from 'react'
import GithubImg from '../Img/GitHub-Icon.png';
import linkedInImg from '../Img/linkedInImg.png';
import Instagram from '../Img/Instagram.png';
import Email from '../Img/Email.png';

function footer() {
  return (
    
    <div className="social-media-links">
        <p><img src={GithubImg } alt=""/></p>
        <p><img src={linkedInImg} alt=""/></p>
        <p><img src={Instagram} alt=""/></p>
        <p><img src={Email} alt=""/></p>
    <hr/>
    <div className="footer-below">
        <div className="footer-copyright">
            <p>
                @{new Date().getFullYear} SimaPeter. All right reserved
            </p>
        </div>
    </div>

    </div>
  )
}

export default footer