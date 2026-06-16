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

const clientFeedback = [
  {
    id: 1,
    name: "Joshua Liddell",
    title: "Company Owner",
    image: "/images/image (15).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your expectation! and quick feedback. Will definitely work with again!\""
  },
  {
    id: 2,
    name: "Arush Aggarwal",
    title: "Senior Manager",
    image: "/images/image (16).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your expectation! and quick feedback. Will definitely work with again!\""
  },
  {
    id: 3,
    name: "Rosy Flower Gaggero",
    title: "Ceo And Founder",
    image: "/images/image (17).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your expectation! and quick feedback. Will definitely work with again!\""
  },
  {
    id: 4,
    name: "Joshua Liddell",
    title: "Company Owner",
    image: "/images/image (15).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your expectation! and quick feedback. Will definitely work with again!\""
  },
  {
    id: 5,
    name: "Arush Aggarwal",
    title: "Senior Manager",
    image: "/images/image (16).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your expectation! and quick feedback. Will definitely work with again!\""
  },
  {
    id: 6,
    name: "Rosy Flower Gaggero",
    title: "Ceo And Founder",
    image: "/images/image (17).png",
    comment: "\"I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your expectation! and quick feedback. Will definitely work with again!\""
  }
];

function HomeContent() {

  return (
    <>
      <section className="about-sec sec-ptb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sec-images">
                <div className="sec-img-one">
                  <img src="/images/image (9).png" alt="about-img"/>
                </div>
                <div className="sec-img-two">
                  <img src="/images/image (10).png" alt="about-img"/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 tab-col-gap">
              <div className="sec-content">
                <h6 className="sec-sub-title">About Your Company</h6>
                <h2 className="sec-title">We Execute Our ideas From The Start to Finish</h2>
                <p className="sec-text">Solve Business Problems And Automate Workflows With Artificial Work Intelligence-Based Solutions. Unlock The Hidden Power Of The Data You Already Have And Hand Hampers The Creativity.</p>
                <ul className="sec-list-item">
                  <li><i className="fa-solid fa-square-check"></i>Development of Financial Models</li>
                  <li><i className="fa-solid fa-square-check"></i>Nifty team is a diverse network of consultants</li>
                  <li><i className="fa-solid fa-square-check"></i>Industry professionals with a global mindset</li>
                </ul>
                <div className="sec-btn">
                  <Link className="thm-btn" to="/about"><span className="txt">Read More</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="service-sec bg-light-greem sec-ptb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sec-content">
                <h6 className="sec-sub-title">Our latest services</h6>
                <h2 className="sec-title">Our clients are the best at IT Management</h2>
                <p className="sec-text">Our Custom Software Design And Development Teams Can Design, Build, Test, And Deliver A Product That Fits Both Your Vision And With Market Demand. With Our Support, You Will Find Customers, Build Income And Attract New Investors.</p>
                <div className="sec-btn">
                  <Link className="thm-btn" to="/services"><span className="txt">View All Services</span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 tab-col-gap">
              <div className="service-lists service-lists-style1">
                <div className="single-service d-flex align-items-center">
                  <div className="single-service-icon"><i className="fas fa-laptop-code"></i></div>
                  <div className="single-service-content">
                    <h4>Software Development</h4>
                    <p>Indeed vanity excuse or mr lovers of on.</p>
                    <Link to="/services"><i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="single-service d-flex align-items-center">
                  <div className="single-service-icon"><i className="fas fa-chart-bar"></i></div>
                  <div className="single-service-content">
                    <h4>Data Analysis</h4>
                    <p>Indeed vanity excuse or mr lovers of on.</p>
                    <Link to="/services"><i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="single-service d-flex align-items-center">
                  <div className="single-service-icon"><i className="fas fa-mobile-alt"></i></div>
                  <div className="single-service-content">
                    <h4>App Development</h4>
                    <p>Indeed vanity excuse or mr lovers of on.</p>
                    <Link to="/services"><i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="single-service d-flex align-items-center">
                  <div className="single-service-icon"><i className="fas fa-cog"></i></div>
                  <div className="single-service-content">
                    <h4>IT Solutions</h4>
                    <p>Indeed vanity excuse or mr lovers of on.</p>
                    <Link to="/services"><i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* newsletter (video + subscribe) */}
      <section className="newslatter-sec bg-green">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-7">
              <div className="video-sec">
                <div className="video-sec-overlay d-flex align-items-center justify-content-center">
                  <a className="video-btn" href="#">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="newslatter-sec__content" style={{padding: '50px 40px'}}>
                <h2 className="sec-title text-white">Subscribe to Our Newsletter</h2>
                <p className="sec-text" style={{color: 'rgba(255,255,255,.75)'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="Subscribe-form">
                  <input type="email" className="form-control" placeholder="Enter Your Email" id="cta-email-home" name="cta-email"/>
                  <div className="submit-btn mt-2">
                    <button type="submit" className="thm-btn"><span className="txt">Subscribe Now</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="project-sec sec-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-content">
                <h6 className="sec-sub-title">Latest Project</h6>
                <h2 className="sec-title">Let's Looks Our Global Projects</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-project">
                <div className="project-img">
                  <img src="/images/project1.png" alt="project" className="h-100" width="412" height="396" style={{width: '100%', objectFit: 'cover'}}/>
                </div>
                <div className="project-title">
                  <div>
                    <h5><a href="#">Project Development</a></h5>
                    <span className="project-cat">It Management</span>
                  </div>
                  <a className="project-btn" href="#"><i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-project">
                <div className="project-img">
                  <img src="/images/project2.png" alt="project" className="h-100" width="412" height="396" style={{width: '100%', objectFit: 'cover'}}/>
                </div>
                <div className="project-title">
                  <div>
                    <h5><a href="#">Project Development</a></h5>
                    <span className="project-cat">It Management</span>
                  </div>
                  <a className="project-btn" href="#"><i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-project">
                <div className="project-img">
                  <img src="/images/project3.png" alt="project" className="h-100" width="412" height="396" style={{width: '100%', objectFit: 'cover'}}/>
                </div>
                <div className="project-title">
                  <div>
                    <h5><a href="#">Project Development</a></h5>
                    <span className="project-cat">It Management</span>
                  </div>
                  <a className="project-btn" href="#"><i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-sec sec-ptb" style={{backgroundColor: '#edf7f5'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sec-content pe-lg-4">
                <h6 className="sec-sub-title">Business Process</h6>
                <h2 className="sec-title">Easy Way Build Success your Business Plan</h2>
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
                    <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '2px'}}>253+</h2>
                    <span style={{fontSize: '14px', fontWeight: 500}}>Team Member</span>
                  </div>
                </div>
                <div className="single-info flex-fill d-flex align-items-center justify-content-center" style={{borderRight: '1px solid rgba(255,255,255,0.2)'}}>
                  <div className="info-icon" style={{color: '#2bbca2', fontSize: '40px'}}><i className="fas fa-check-circle"></i></div>
                  <div className="info ms-3 text-white">
                    <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '2px'}}>18K+</h2>
                    <span style={{fontSize: '14px', fontWeight: 500}}>Complete Project</span>
                  </div>
                </div>
                <div className="single-info flex-fill d-flex align-items-center justify-content-center">
                  <div className="info-icon" style={{color: '#2bbca2', fontSize: '40px'}}><i className="fas fa-handshake"></i></div>
                  <div className="info ms-3 text-white">
                    <h2 style={{fontSize: '32px', fontWeight: 700, marginBottom: '2px'}}>22K+</h2>
                    <span style={{fontSize: '14px', fontWeight: 500}}>Client Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-sec sec-ptb">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="sec-content text-center mb-5">
                <h6 className="sec-sub-title">Our Pricing</h6>
                <h2 className="sec-title">Find the Right Plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-pricing">
                <div className="pricing-badge text-center">
                  <span className="title">Basic Plan</span>
                  <div className="pricing-price">
                    <span className="currency">$</span>
                    <h3 className="price">110<span>/Per Month</span></h3>
                  </div>
                  <div className="pricing-btn">
                    <Link className="btn" to="/contact">Discover More</Link>
                  </div>
                </div>
                <div className="pricing-content">
                  <ul className="pricing-list">
                    <li>Key Words Optimized</li>
                    <li>Top 10 Ranking Guarantee</li>
                    <li>Weekly Reporting</li>
                    <li>Key Words Optimized</li>
                    <li>Top 10 Ranking Guarantee</li>
                    <li>Unlimited users</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-pricing popular">
                <div className="pricing-badge text-center">
                  <span className="title">Popular</span>
                  <div className="pricing-price">
                    <span className="currency">$</span>
                    <h3 className="price">210<span>/Per Month</span></h3>
                  </div>
                  <div className="pricing-btn">
                    <Link className="btn" to="/contact">Discover More</Link>
                  </div>
                </div>
                <div className="pricing-content">
                  <ul className="pricing-list">
                    <li>Key Words Optimized</li>
                    <li>Top 10 Ranking Guarantee</li>
                    <li>Weekly Reporting</li>
                    <li>Key Words Optimized</li>
                    <li>Top 10 Ranking Guarantee</li>
                    <li>Unlimited users</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="single-pricing">
                <div className="pricing-badge text-center">
                  <span className="title">Custom</span>
                  <div className="pricing-price">
                    <span className="currency">$</span>
                    <h3 className="price">310<span>/Per Month</span></h3>
                  </div>
                  <div className="pricing-btn">
                    <Link className="btn" to="/contact">Discover More</Link>
                  </div>
                </div>
                <div className="pricing-content">
                  <ul className="pricing-list">
                    <li>Key Words Optimized</li>
                    <li>Top 10 Ranking Guarantee</li>
                    <li>Weekly Reporting</li>
                    <li>Key Words Optimized</li>
                    <li>Top 10 Ranking Guarantee</li>
                    <li>Unlimited users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="working-sec sec-ptb bg-green">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8 offset-lg-4 col-lg-4">
              <div className="sec-content text-center mb-5">
                <h5 className="brand-text">We have more than <span>270+</span> Happy Customers with satisfaction</h5>
              </div>
            </div>
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

      <section className="testimonial-sec sec-ptb">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="sec-content text-center mb-5">
                <h6 className="sec-sub-title">Clients Testimonials</h6>
                <h2 className="sec-title">What Our Customers Say</h2>
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: '50px' }}>
            <Slider {...sliderConfig}>
              {clientFeedback.map((feedbackItem) => (
                <div key={feedbackItem.id} style={{ padding: '0 12px' }}>
                  <div className="single-testimonial">
                    <div className="feedback">
                      <div className="rating">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                      <p className="comment">{feedbackItem.comment}</p>
                    </div>
                    <div className="customar-info">
                      <div className="customar-img"><img src={feedbackItem.image} alt="testimonial" width="60" height="60"/></div>
                      <div className="customar-title">
                        <h5>{feedbackItem.name}</h5>
                        <span className="title">{feedbackItem.title}</span>
                      </div>
                    </div>
                    <div className="com-logo"><i className="fas fa-cube"></i></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="blog-sec sec-ptb bg-light-greem">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-content mb-5">
                <h6 className="sec-sub-title">Our Blogs</h6>
                <h2 className="sec-title">Let's Checkout Our All Latest News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="blog-left-box blog-item">
                <div className="img-box" style={{height: '300px'}}>
                  <img src="/images/service5.png" alt="blog" className="h-100" width="588" height="569" style={{width: '100%', objectFit: 'cover', height: '100%'}}/>
                </div>
                <div className="content-box">
                  <div className="meta-box">
                    <ul className="meta-info d-flex">
                      <li><div className="icon"><i className="fas fa-user"></i></div><span><a href="#">Admin</a></span></li>
                      <li><div className="icon"><i className="fas fa-calendar"></i></div><span><a href="#">October 2, 2023</a></span></li>
                    </ul>
                  </div>
                  <div className="title-box">
                    <h3><Link to="/blog-details">Everything you need to learn about IT Solution for your Company.</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-sidebar-box">
                <ul className="list-unstyled">
                  <li className="blog-sidebar-box-item blog-item">
                    <div className="img-box">
                      <img src="/images/image (10).png" alt="blog" className="h-100" width="236" height="174" style={{width: '100%', objectFit: 'cover', height: '80px'}}/>
                    </div>
                    <div className="content-box">
                      <div className="meta-box">
                        <ul className="meta-info d-flex">
                          <li><div className="icon"><i className="fas fa-user"></i></div><span><a href="#">Admin</a></span></li>
                          <li><div className="icon"><i className="fas fa-calendar"></i></div><span><a href="#">Dec 27, 2023</a></span></li>
                        </ul>
                      </div>
                      <div className="title-box"><h3><Link to="/blog-details">Everything you need to learn about IT Solution for your Company.</Link></h3></div>
                      <div className="btn-box"><Link className="read-more" to="/blog-details"><span className="txt">Read More</span><i className="fas fa-arrow-right"></i></Link></div>
                    </div>
                  </li>
                  <li className="blog-sidebar-box-item blog-item">
                    <div className="img-box">
                      <img src="/images/project4.png" alt="blog" className="h-100" width="236" height="174" style={{width: '100%', objectFit: 'cover', height: '80px'}}/>
                    </div>
                    <div className="content-box">
                      <div className="meta-box">
                        <ul className="meta-info d-flex">
                          <li><div className="icon"><i className="fas fa-user"></i></div><span><a href="#">Admin</a></span></li>
                          <li><div className="icon"><i className="fas fa-calendar"></i></div><span><a href="#">Dec 27, 2023</a></span></li>
                        </ul>
                      </div>
                      <div className="title-box"><h3><Link to="/blog-details">New Technology for System Security to improve security system.</Link></h3></div>
                      <div className="btn-box"><Link className="read-more" to="/blog-details"><span className="txt">Read More</span><i className="fas fa-arrow-right"></i></Link></div>
                    </div>
                  </li>
                  <li className="blog-sidebar-box-item blog-item">
                    <div className="img-box">
                      <img src="/images/image (14).png" alt="blog" className="h-100" width="236" height="174" style={{width: '100%', objectFit: 'cover', height: '80px'}}/>
                    </div>
                    <div className="content-box">
                      <div className="meta-box">
                        <ul className="meta-info d-flex">
                          <li><div className="icon"><i className="fas fa-user"></i></div><span><a href="#">Admin</a></span></li>
                          <li><div className="icon"><i className="fas fa-calendar"></i></div><span><a href="#">Dec 27, 2023</a></span></li>
                        </ul>
                      </div>
                      <div className="title-box"><h3><Link to="/blog-details">Analytical Solutions lorem ipsum take a trivial example, which of us ever under.</Link></h3></div>
                      <div className="btn-box"><Link className="read-more" to="/blog-details"><span className="txt">Read More</span><i className="fas fa-arrow-right"></i></Link></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
