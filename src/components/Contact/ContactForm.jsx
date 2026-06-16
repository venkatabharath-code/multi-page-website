function ContactForm() {
  return (
    <>
      {/* contact form + info */}
      <section className="contact-page-sec sec-ptb">
        <div className="container">
          <div className="row">
            {/* Left: Contact info */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="get-in-touch">
                <h6 className="sec-sub-title">Get In Touch</h6>
                <h2 className="sec-title">Get In Touch With Us</h2>
                <p className="sec-text">Have a question or want to work with us? Fill out the form or reach out directly and our team will get back to you shortly.</p>
              </div>
              <div className="qinfo-list">
                <div className="qinfo-item">
                  <div className="qinfo-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="qinfo-box">
                    <h5>Office Address</h5>
                    <a href="#">Jones Street, New York, USA</a>
                  </div>
                </div>
                <div className="qinfo-item">
                  <div className="qinfo-icon"><i className="fas fa-envelope"></i></div>
                  <div className="qinfo-box">
                    <h5>Email Address</h5>
                    <a href="mailto:Info@example.com">Info@example.com</a>
                  </div>
                </div>
                <div className="qinfo-item">
                  <div className="qinfo-icon"><i className="fas fa-phone"></i></div>
                  <div className="qinfo-box">
                    <h5>Phone Number</h5>
                    <a href="tel:+70264566579">+70 264 566 579</a>
                    <a href="tel:6295550129">(629) 555-0129</a>
                  </div>
                </div>
                <div className="qinfo-item">
                  <div className="qinfo-icon"><i className="fas fa-clock"></i></div>
                  <div className="qinfo-box">
                    <h5>Working Hours</h5>
                    <a href="#">Monday – Friday, 9:00 AM – 6:00 PM</a>
                  </div>
                </div>
              </div>
              <div className="company-social d-flex">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="col-lg-7">
              <div className="contact-form-wrap" style={{background: '#ffffff', boxShadow: '0px 10px 40px rgba(0,0,0,0.06)', padding: '40px', borderRadius: '16px'}}>
                <h2 className="sec-title mb-4">Send Us A Message</h2>
                <form id="contact-form" action="#" method="post" noValidate>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="contact-field">
                        <input type="text" name="full-name" id="full-name" placeholder="Full Name" required autoComplete="name" style={{width: '100%', border: 'none', background: '#f4f7f6', padding: '16px 20px', borderRadius: '8px', outline: 'none', fontSize: '15px', color: '#333'}}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-field">
                        <input type="email" name="email" id="email-contact" placeholder="Email Address" required autoComplete="email" style={{width: '100%', border: 'none', background: '#f4f7f6', padding: '16px 20px', borderRadius: '8px', outline: 'none', fontSize: '15px', color: '#333'}}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-field">
                        <input type="tel" name="phone" id="phone-contact" placeholder="Phone Number" autoComplete="tel" style={{width: '100%', border: 'none', background: '#f4f7f6', padding: '16px 20px', borderRadius: '8px', outline: 'none', fontSize: '15px', color: '#333'}}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-field">
                        <input type="text" name="subject" id="subject-contact" placeholder="Subject" style={{width: '100%', border: 'none', background: '#f4f7f6', padding: '16px 20px', borderRadius: '8px', outline: 'none', fontSize: '15px', color: '#333'}}/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-field">
                        <textarea name="message" id="message-contact" rows="6" placeholder="Write your message here..." style={{width: '100%', border: 'none', background: '#f4f7f6', padding: '16px 20px', borderRadius: '8px', outline: 'none', fontSize: '15px', color: '#333', resize: 'vertical'}}></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="itco-form-btn mt-2">
                        <button type="submit" className="thm-btn w-100 justify-content-center" style={{border: 'none', padding: '18px'}}><span className="txt">Send Message</span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
