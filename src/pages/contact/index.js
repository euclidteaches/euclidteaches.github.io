import React from 'react';
import '../contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import ContactLeft from '../../components/contact_left';
import EmailForm from '../../components/email_form';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import particles from '../../const/contact_particle.js';
import Particles from 'react-particles-js';

class Contact extends React.Component {

  componentDidMount() {
    //--Joshua Michalik Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("UA-57401503-1");
    ReactGa.pageview('darthyody.github.io/portfolio - Contact Screen');
  }
   //--Joshua Michalik Portfolio website Google analytics--

  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Joshua Michalik</title>
                <link rel="canonical" href="http://darthyody.github.io/portfolio/contact" />
                <meta name="description" content="Joshua Michalik | Contact - Product Manager | Project Manager | Software Engineer" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles
            params={particles}
            className="particle"
          />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
            <HamburgerMenu />
            </Row>
            <Row className="Contact-main">
            <Col  xl={6}  className="Contact-left">
            <ContactLeft />
            </Col>
            <Col  xl={6}  className="Contact-right">
              <EmailForm />
            </Col>
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
       </Animate>
      </div>
    )
  }
}export default Contact