import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section id='Newsletter' className="container">
      <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Newsletter