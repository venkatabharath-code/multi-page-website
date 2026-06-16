import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <button className="scroll-top" id="scrollTopBtn" onClick={scrollToTop}>
        <i className="fa-solid fa-angles-up"></i>
      </button>

      <header className={`main-header main-header-one ${isSticky ? 'sticky-menu' : ''}`}>
        <div id="sticky-header" className="menu-area">
          <div className="main-header-one__outer">
            <div className="main-header-one__right">
              <div className="container">
                <div className="menu-area__inner">

                  <div className="mobile-nav-toggler">
                    <div className="site-ligo">
                      <Link to="/">
                        <img src="/images/image (1).png" alt="Itco Logo" width="105" height="40"/>
                        <span style={{display: 'none', fontWeight: 800, fontSize: '22px', color: '#2bbca2', fontFamily: "'Outfit',sans-serif"}}>ITCO</span>
                      </Link>
                    </div>
                    <i className="fas fa-bars" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu"></i>
                  </div>

                  <div className="menu-wrap d-none d-lg-block">
                    <nav className="menu-nav">
                      <div className="main-header-one__inner">
                        <div className="main-header-one__top">
                          <div className="container">
                            <div className="main-header-one__top-inner">
                              <div className="main-header-one__top-left">
                                <div className="header-contact-info">
                                  <ul>
                                    <li>
                                      <div className="icon-box"><i className="fas fa-map-marker-alt"></i></div>
                                      <p>Jones Street, New York, USA</p>
                                    </li>
                                    <li>
                                      <div className="icon-box"><i className="fas fa-envelope"></i></div>
                                      <p><a href="mailto:Info@example.com">Info@example.com</a></p>
                                    </li>
                                    <li>
                                      <div className="icon-box"><i className="fas fa-phone"></i></div>
                                      <p><a href="tel:+70264566579">+70 264 566 579</a></p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="main-header-one__top-right">
                                <div className="header-social-links">
                                  <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="main-header-one__bottom">
                          <div className="container">
                            <div className="main-header-one__bottom-inner bg-white shadow-sm d-flex align-items-center justify-content-between">
                              <div className="main-header-one__bottom-left d-flex align-items-center">
                                <div className="site-ligo d-flex align-items-center">
                                  <Link to="/">
                                    <img src="/images/image (1).png" alt="Itco Logo" width="105" height="40"/>
                                    <span style={{display: 'none', fontWeight: 800, fontSize: '22px', color: '#2bbca2', fontFamily: "'Outfit',sans-serif"}}>ITCO</span>
                                  </Link>
                                </div>
                                <div className="navbar-wrap main-menu">
                                  <ul className="navigation">
                                    <li><Link to="/" className="ui-active-parent-1">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li className="menu-item-has-children"><a href="#">Services <i className="fas fa-chevron-down ms-1" style={{fontSize: '10px'}}></i></a><ul className="sub-menu"><li><Link to="/services">Services</Link></li><li><a href="#">Service Details</a></li></ul></li>
                                    <li className="menu-item-has-children"><a href="#">Pages <i className="fas fa-chevron-down ms-1" style={{fontSize: '10px'}}></i></a><ul className="sub-menu"><li><Link to="/team">Team</Link></li><li><a href="#">Projects</a></li></ul></li>
                                    <li className="menu-item-has-children"><a href="#">Blog <i className="fas fa-chevron-down ms-1" style={{fontSize: '10px'}}></i></a><ul className="sub-menu"><li><a href="#">Blog</a></li><li><Link to="/blog-details">Blog Details</Link></li></ul></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="main-header-one__bottom-right d-flex align-items-center">
                                <div className="btn-box">
                                  <Link className="thm-btn" to="/contact"><span className="txt">Get A Free Quote</span></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            <Link to="/" style={{fontWeight: 800, fontSize: '22px', color: '#2bbca2', fontFamily: "'Outfit',sans-serif", textDecoration: 'none'}}>ITCO</Link>
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="mb-2"><Link to="/" className="d-block py-2 px-3 text-dark fw-semibold" data-bs-dismiss="offcanvas">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="d-block py-2 px-3 text-dark fw-semibold" data-bs-dismiss="offcanvas">About</Link></li>
            <li className="mb-2">
                <a href="#servicesSubmenu" data-bs-toggle="collapse" aria-expanded="false" className="d-flex justify-content-between align-items-center py-2 px-3 text-dark fw-semibold text-decoration-none">
                  Services <i className="fas fa-chevron-down" style={{fontSize: '12px'}}></i>
                </a>
                <ul className="collapse list-unstyled ps-4" id="servicesSubmenu">
                  <li><Link to="/services" className="d-block py-2 text-dark text-decoration-none" data-bs-dismiss="offcanvas">Services</Link></li>
                  <li><a href="#" className="d-block py-2 text-dark text-decoration-none" data-bs-dismiss="offcanvas">Service Details</a></li>
                </ul>
              </li>
            <li className="mb-2">
                <a href="#pagesSubmenu" data-bs-toggle="collapse" aria-expanded="false" className="d-flex justify-content-between align-items-center py-2 px-3 text-dark fw-semibold text-decoration-none">
                  Pages <i className="fas fa-chevron-down" style={{fontSize: '12px'}}></i>
                </a>
                <ul className="collapse list-unstyled ps-4" id="pagesSubmenu">
                  <li><Link to="/team" className="d-block py-2 text-dark text-decoration-none" data-bs-dismiss="offcanvas">Team</Link></li>
                  <li><a href="#" className="d-block py-2 text-dark text-decoration-none" data-bs-dismiss="offcanvas">Projects</a></li>
                </ul>
              </li>
            <li className="mb-2">
                <a href="#blogSubmenu" data-bs-toggle="collapse" aria-expanded="false" className="d-flex justify-content-between align-items-center py-2 px-3 text-dark fw-semibold text-decoration-none">
                  Blog <i className="fas fa-chevron-down" style={{fontSize: '12px'}}></i>
                </a>
                <ul className="collapse list-unstyled ps-4" id="blogSubmenu">
                  <li><a href="#" className="d-block py-2 text-dark text-decoration-none" data-bs-dismiss="offcanvas">Blog</a></li>
                  <li><Link to="/blog-details" className="d-block py-2 text-dark text-decoration-none" data-bs-dismiss="offcanvas">Blog Details</Link></li>
                </ul>
              </li>
            <li className="mb-2"><Link to="/contact" className="d-block py-2 px-3 text-dark fw-semibold" data-bs-dismiss="offcanvas">Contact</Link></li>
          </ul>
          <div className="mobile-menu mt-4 pt-4 border-top">
            <div className="contact-info d-flex align-items-center gap-2 mb-3">
              <div className="icon-box text-success"><i className="fas fa-phone"></i></div>
              <p className="mb-0"><a href="tel:6295550129">(629) 555-0129</a></p>
            </div>
            <div className="social-links">
              <ul className="d-flex gap-2 list-unstyled">
                <li><a href="#" className="social-link-mobile"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" className="social-link-mobile"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="social-link-mobile"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="social-link-mobile"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer-sec">
        <div className="section-overlay sec-pt">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xl-3 mb-4">
                <div className="footer-widget">
                  <div className="footer-widget-logo mb-3">
                    <Link to="/">
                      <img src="/images/image (1).png" alt="Itco Logo" width="104" height="40"/>
                      <span style={{display: 'none', fontWeight: 800, fontSize: '22px', color: '#2bbca2', fontFamily: "'Outfit',sans-serif"}}>ITCO</span>
                    </Link>
                  </div>
                  <div className="footer-widget-content">
                    <p className="ft-text">Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ puru rhoncu tincidunt odio ultrices. Sed odio feugiat feugiat felis.</p>
                    <div className="footer-social">
                      <div className="footer-social-icon d-flex">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 offset-xl-1 col-xl-2 mb-4">
                <div className="footer-widget">
                  <h4 className="footer-widget-title tx-white">Our Services</h4>
                  <div className="footer-widget-content">
                    <div className="footer-links">
                      <ul>
                        <li><Link to="/services">Tech Solutions</Link></li>
                        <li><Link to="/services">Digital Marketing</Link></li>
                        <li><Link to="/services">Web Development</Link></li>
                        <li><Link to="/services">IT Consulting</Link></li>
                        <li><Link to="/services">Data Analytics</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 offset-xl-1 col-xl-2 mb-4">
                <div className="footer-widget pages-links">
                  <h4 className="footer-widget-title tx-white">Useful Links</h4>
                  <div className="footer-widget-content">
                    <div className="footer-links">
                      <ul>
                        <li><Link to="/about">What We Do</Link></li>
                        <li><Link to="/team">Our Team</Link></li>
                        <li><a href="#">Our Projects</a></li>
                        <li><a href="#">Faq ask</a></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><a href="#">Blog</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 mb-4">
                <div className="footer-widget">
                  <h4 className="footer-widget-title tx-white">Recent Post</h4>
                  <div className="footer-widget-content">
                    <div className="footer-recent-post">
                      <ul className="list-unstyled">
                        <li className="blog-item d-flex mb-3">
                          <div className="img-box"><img src="/images/image (21).png" alt="blog" width="109" height="93" style={{width: '90px', height: '70px', objectFit: 'cover', borderRadius: '8px'}}/></div>
                          <div className="content-box ps-3">
                            <div className="meta-box"><ul className="meta-info list-unstyled"><li className="d-flex align-items-center gap-2"><div className="icon"><i className="fas fa-calendar"></i></div><span><a href="#">Dec 27, 2023</a></span></li></ul></div>
                            <div className="title-box"><h3 style={{fontSize: '13px'}}><Link to="/blog-details">Efficiency redefined through technology.</Link></h3></div>
                          </div>
                        </li>
                        <li className="blog-item d-flex">
                          <div className="img-box"><img src="/images/image (22).png" alt="blog" width="109" height="93" style={{width: '90px', height: '70px', objectFit: 'cover', borderRadius: '8px'}}/></div>
                          <div className="content-box ps-3">
                            <div className="meta-box"><ul className="meta-info list-unstyled"><li className="d-flex align-items-center gap-2"><div className="icon"><i className="fas fa-calendar"></i></div><span><a href="#">Dec 27, 2023</a></span></li></ul></div>
                            <div className="title-box"><h3 style={{fontSize: '13px'}}><Link to="/blog-details">IT Solution for your Company.</Link></h3></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid"><div className="row"><div className="col p-0"><hr className="footer-hr"/></div></div></div>
          <div className="container">
            <div className="row footer-copyright">
              <div className="col">
                <div className="footer-copyright-text text-center">
                  <p className="mb-0">&copy; <a href="#">Qubohub</a> 2024. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
