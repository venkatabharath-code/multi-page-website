import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const sliderConfig = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const clientReviews = [
  {
    id: 1,
    name: "Joshua Liddell",
    title: "Company Owner",
    image: "/images/image (2).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! Talented young UI/UX designer who will beat your expectation! Will definitely work with again!\""
  },
  {
    id: 2,
    name: "Arush Aggarwal",
    title: "Senior Manager",
    image: "/images/image (3).png",
    comment: "\"Excellent collaboration and outstanding results. The team delivered beyond our expectations with top quality and quick turnaround.\""
  },
  {
    id: 3,
    name: "Rosy Flower Gaggero",
    title: "Ceo And Founder",
    image: "/images/emp1.png",
    comment: "\"Incredible expertise and attention to detail. Our IT infrastructure improved dramatically and our team's efficiency went up significantly.\""
  },
  {
    id: 4,
    name: "Joshua Liddell",
    title: "Company Owner",
    image: "/images/image (2).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! Talented young UI/UX designer who will beat your expectation! Will definitely work with again!\""
  },
  {
    id: 5,
    name: "Arush Aggarwal",
    title: "Senior Manager",
    image: "/images/image (3).png",
    comment: "\"Excellent collaboration and outstanding results. The team delivered beyond our expectations with top quality and quick turnaround.\""
  },
  {
    id: 6,
    name: "Rosy Flower Gaggero",
    title: "Ceo And Founder",
    image: "/images/emp1.png",
    comment: "\"Incredible expertise and attention to detail. Our IT infrastructure improved dramatically and our team's efficiency went up significantly.\""
  }
];

function AboutContent() {

  return (
    <>
      <section className="mvv-sec sec-ptb bg-light-greem">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-6 offset-lg-3">
              <h6 className="sec-sub-title">Our Core</h6>
              <h2 className="sec-title">Our Mission, Vision &amp; Values</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="single-service text-center d-flex flex-column align-items-center p-4" style={{height: '100%', borderRadius: '14px', background: '#fff', boxShadow: '0 6px 24px rgba(0,0,0,.08)'}}>
                <div className="single-service-icon mb-3" style={{width: '70px', height: '70px', fontSize: '30px'}}><i className="fas fa-rocket"></i></div>
                <h4 className="mb-3">Our Mission</h4>
                <p>To deliver innovative technology solutions that empower businesses to achieve their goals and drive digital transformation with efficiency.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="single-service text-center d-flex flex-column align-items-center p-4" style={{height: '100%', borderRadius: '14px', background: '#fff', boxShadow: '0 6px 24px rgba(0,0,0,.08)'}}>
                <div className="single-service-icon mb-3" style={{width: '70px', height: '70px', fontSize: '30px'}}><i className="fas fa-eye"></i></div>
                <h4 className="mb-3">Our Vision</h4>
                <p>To be the leading global provider of IT solutions that transform industries and create lasting value for our clients and communities.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="single-service text-center d-flex flex-column align-items-center p-4" style={{height: '100%', borderRadius: '14px', background: '#fff', boxShadow: '0 6px 24px rgba(0,0,0,.08)'}}>
                <div className="single-service-icon mb-3" style={{width: '70px', height: '70px', fontSize: '30px'}}><i className="fas fa-heart"></i></div>
                <h4 className="mb-3">Our Values</h4>
                <p>Integrity, innovation, and client focus are at the core of everything we do. We are committed to delivering excellence in all our engagements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-sec sec-ptb" style={{backgroundColor: '#edf7f5'}}>
        <div className="container">
          <div className="row align-items-center">
            {/* Content on the Left */}
            <div className="col-lg-6">
              <div className="sec-content pe-lg-4">
                <h6 className="sec-sub-title">Buisness Process</h6>
                <h2 className="sec-title">Easy Way Build Success your Buisness Pla</h2>
                <p className="sec-text" style={{fontSize: '14px', marginBottom: '30px'}}>Solve Business Problems And Automate Workflows With Artificial Intelligence-Based Solutions. Unlock The Hidden Power Of The Data You Already Have And Hand.</p>
                <div className="ab-progress">
                  <h2 className="progress-title">Productivity</h2>
                  <div className="ui-progressbar"><div className="progress-fill" style={{width: '80%'}}><span className="ui-progressbar-label">80%</span></div></div>
                </div>
                <div className="ab-progress">
                  <h2 className="progress-title">Digital Marketing</h2>
                  <div className="ui-progressbar"><div className="progress-fill" style={{width: '75%'}}><span className="ui-progressbar-label">75%</span></div></div>
                </div>
                <div className="ab-progress">
                  <h2 className="progress-title">Technology</h2>
                  <div className="ui-progressbar"><div className="progress-fill" style={{width: '90%'}}><span className="ui-progressbar-label">90%</span></div></div>
                </div>
              </div>
            </div>
            {/* Image on the Right */}
            <div className="col-lg-6">
              <div className="sec-images mt-5 mt-lg-0">
                <img src="/images/image (14).png" alt="Business Process" style={{borderRadius: '12px', width: '100%', objectFit: 'cover'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-qinfo-sec" style={{marginTop: '-60px', position: 'relative', zIndex: 2}}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="company-qinfo-raaper d-flex flex-wrap" style={{backgroundColor: '#1a4038', borderRadius: '12px', padding: '40px 20px'}}>
                <div className="single-info flex-fill d-flex align-items-center justify-content-center" style={{borderRight: '1px solid rgba(255,255,255,0.2)'}}>
                  <div className="info-icon" style={{color: '#2bbca2', fontSize: '40px'}}><i className="fas fa-users-cog"></i></div>
                  <div className="info ms-3 text-white">
                    <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '2px'}}>200+</h2>
                    <span style={{fontSize: '14px', fontWeight: 500}}>Team Member</span>
                  </div>
                </div>
                <div className="single-info flex-fill d-flex align-items-center justify-content-center" style={{borderRight: '1px solid rgba(255,255,255,0.2)'}}>
                  <div className="info-icon" style={{color: '#2bbca2', fontSize: '40px'}}><i className="fas fa-handshake"></i></div>
                  <div className="info ms-3 text-white">
                    <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '2px'}}>25K+</h2>
                    <span style={{fontSize: '14px', fontWeight: 500}}>Complete Project</span>
                  </div>
                </div>
                <div className="single-info flex-fill d-flex align-items-center justify-content-center">
                  <div className="info-icon" style={{color: '#2bbca2', fontSize: '40px'}}><i className="fas fa-hands-helping"></i></div>
                  <div className="info ms-3 text-white">
                    <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '2px'}}>18K+</h2>
                    <span style={{fontSize: '14px', fontWeight: 500}}>Client Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-sec sec-ptb">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <h6 className="sec-sub-title">Our Team</h6>
              <h2 className="sec-title">Meet Our Expert Professional Team</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="single-team">
                <div className="member-img"><img src="/images/emp1.png" alt="team" width="300" height="300" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Alex Martin</a></h4><span className="member-cat">Ceo And Founder</span></div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="single-team">
                <div className="member-img"><img src="/images/emp2.png" alt="team" width="300" height="300" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Sarah Wilson</a></h4><span className="member-cat">Lead Developer</span></div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="single-team">
                <div className="member-img"><img src="/images/emp3.png" alt="team" width="300" height="300" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Kevin Brown</a></h4><span className="member-cat">UI/UX Designer</span></div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="single-team">
                <div className="member-img"><img src="/images/emp4.png" alt="team" width="300" height="300" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Emily Clark</a></h4><span className="member-cat">Project Manager</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-sec sec-ptb bg-light-greem">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 offset-lg-3 text-center">
              <h6 className="sec-sub-title">Clients Testimonials</h6>
              <h2 className="sec-title">What Our Customers Say</h2>
            </div>
          </div>
          <div style={{ paddingBottom: '50px' }}>
            <Slider {...sliderConfig}>
              {clientReviews.map((review) => (
                <div key={review.id} style={{ padding: '0 12px' }}>
                  <div className="single-testimonial">
                    <div className="feedback">
                      <div className="rating">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                      <p className="comment">{review.comment}</p>
                    </div>
                    <div className="customar-info">
                      <div className="customar-img"><img src={review.image} alt="tc" width="60" height="60"/></div>
                      <div className="customar-title"><h5>{review.name}</h5><span className="title">{review.title}</span></div>
                    </div>
                    <div className="com-logo"><i className="fas fa-cube"></i></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="brand-sec sec-ptb bg-green">
        <div className="container">
          <div className="col-12 text-center mb-5">
            <h5 className="brand-text">We have more than <span>270+</span> Happy Customers with satisfaction</h5>
          </div>
          <div className="brand-logos">
            <div className="brand-logo"><img src="/images/brand1.png" alt="brand" style={{maxHeight: '50px'}}/></div>
            <div className="brand-logo"><img src="/images/brand2.png" alt="brand" style={{maxHeight: '50px'}}/></div>
            <div className="brand-logo"><img src="/images/brand3.png" alt="brand" style={{maxHeight: '50px'}}/></div>
            <div className="brand-logo"><img src="/images/brand4.png" alt="brand" style={{maxHeight: '50px'}}/></div>
            <div className="brand-logo"><img src="/images/brand5.png" alt="brand" style={{maxHeight: '50px'}}/></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutContent;
