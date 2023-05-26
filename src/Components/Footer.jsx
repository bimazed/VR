import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4>About Us</h4>
            <p>We are a virtual dressing platform that makes online shopping more convenient and fun than ever before. With our platform, you can try on clothes virtually to see how they look and fit before you buy.</p>
          </div>
          <div className="col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker"></i> 123 Main Street, Anytown, USA</li>
              <li><i className="fa fa-phone"></i> (555) 555-5555</li>
              <li><i className="fa fa-envelope"></i> info@virtualdressing.com</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr />
            <p className="text-muted">&copy; 2023 Virtual Dressing, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
