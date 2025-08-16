import React from 'react';
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, Links } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-100 text-primary-content p-10">
  <aside>
     <a className="btn btn-ghost text-3xl"><span className="text-primary">Abul</span><span className="text-secondary">-Kalam</span></a>
    <p>Copyright © {new Date().getFullYear()} - All right reserved abulkalam</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
     <Link to='https://github.com/Abul-kalam800'><FaGithub  size={35}/></Link> 
     <Link to='https://www.facebook.com/bd.abulkalam800'><FaFacebookF size={35}/></Link>
     <Link to='https://www.linkedin.com/in/abulkalam800/'><FaLinkedin  size={35}/></Link>
    </div>
  </nav>
</footer>
    );
};

export default Footer;