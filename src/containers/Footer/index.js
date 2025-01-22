import './index.css';
import { FiGithub,  FiLinkedin } from 'react-icons/fi';
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com/aDevMister" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={21} className="small-icon" />
                </a>
              
                <a href="https://x.com/devgorithm" target="_blank" rel="noopener noreferrer">
                    <RiTwitterXLine size={21} className="small-icon" />
                </a>
                <a href="https://www.linkedin.com/in/abdulqudusajape/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin size={21} className="small-icon" />
                </a>
            </div>
            <p>
                © {currentYear} AbdulQudus Ajape. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
