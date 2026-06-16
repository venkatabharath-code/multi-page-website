import { Link } from 'react-router-dom';

function ContactInfo() {
  return (
    <>
      {/* breadcrumb */}
      <section id="site-breadcumb">
        <div className="site-breadcumb-wrapper">
          <div className="container">
            <div className="breadcumb-content d-flex justify-content-between align-items-center text-start">
              <h1 className="breadcumb-title mb-0">Contact Us</h1>
              <div className="d-flex align-items-center" style={{gap: '12px'}}>
                <Link to="/" style={{color: 'rgba(255,255,255,.6)', textDecoration: 'none', fontSize: '15px', fontWeight: 500}}>Home</Link>
                <i className="fas fa-chevron-right" style={{color: 'rgba(255,255,255,.4)', fontSize: '12px'}}></i>
                <span style={{color: '#fff', fontSize: '15px', fontWeight: 600}}>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section className="contact-map-sec">
        <div className="contact-map-location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425908428698!3d40.71256684445987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a227a39ebbb%3A0xc2521a584aa89c37!2sNew+York+City!5e0!3m2!1sen!2sus!4v1571928647890!5m2!1sen!2sus" width="100%" height="400" style={{border: 0, display: 'block'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Itco Location Map"></iframe>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
