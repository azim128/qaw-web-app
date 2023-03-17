import React from 'react'
import SectionHead from '../sectionheader/SectionHead'
import './contact.css'
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <SectionHead title="Contact" subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."/>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
              <iframe 
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.509499901573!2d88.62618861426726!3d24.363573170993504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a55ea957%3A0x2f9cac3357d62617!2sRajshahi%20University%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sbd!4v1678975627356!5m2!1sen!2sbd" style={{ border: 0, width: '100%', height: '290px' }}
                allowFullScreen ></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="main-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact