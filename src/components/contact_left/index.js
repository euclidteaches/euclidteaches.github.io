import React from 'react';
import '../contact_left/style.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Contact_Left() {
  return (
    <div>
           <Row className="Contact-text">
              <Col xl={12}>
              <h1 className="p-heading1">Contact</h1>
              <p className="p-heading2">
              Greetings!<br />
              Thanks for reaching out. If you would like to discuss designing a course for your company, please contact me here.<br/>
              You can send me a message via the Contact Form <strong>OR</strong> click on the social media icon if you prefer that means instead.
              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
              <SocialIcons />
            </Row>
    </div>
  );
}

export default Contact_Left;
