import { Link } from 'react-router-dom';

function ServicesIntro() {
  return (
    <>
      {/* breadcrumb */}
      <section id="site-breadcumb">
        <div className="site-breadcumb-wrapper">
          <div className="container">
            <div className="breadcumb-content d-flex justify-content-between align-items-center text-start">
              <h1 className="breadcumb-title mb-0">Our Services</h1>
              <div className="d-flex align-items-center" style={{gap: '12px'}}>
                <Link to="/" style={{color: 'rgba(255,255,255,.6)', textDecoration: 'none', fontSize: '15px', fontWeight: 500}}>Home</Link>
                <i className="fas fa-chevron-right" style={{color: 'rgba(255,255,255,.4)', fontSize: '12px'}}></i>
                <span style={{color: '#fff', fontSize: '15px', fontWeight: 600}}>Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services grid */}
      <section className="service-sec2 sec-ptb" style={{background: '#fff', paddingTop: '100px', paddingBottom: '100px'}}>
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="sec-content text-center mb-5">
                <h6 className="sec-sub-title" style={{color: 'var(--thm-teal)', fontWeight: 600, fontSize: '16px'}}>What We Do</h6>
                <h2 className="sec-title" style={{color: 'var(--thm-black)', fontWeight: 800, fontFamily: 'var(--thm-heading)', fontSize: '42px'}}>Services That Help You Grow</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="single-service-style2 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="img-box">
                  <img alt="service" src="/images/service1.png" className="h-h-100"/>
                </div>
                <div className="content-box d-flex">
                  <div className="single-service-content">
                    <h5><a href="#" style={{textDecoration: 'none', fontFamily: 'var(--thm-heading)', fontWeight: 700}}>Content Management</a></h5>
                    <p>We focus on the best practices it solutions and for services.</p>
                    <a className="read-more" href="#" style={{color: 'var(--thm-teal)', textDecoration: 'none', fontSize: '14px', fontWeight: 600}}>Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                  <div className="single-service-icon"><i className="fas fa-tasks"></i></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service-style2 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="img-box">
                  <img alt="service" src="/images/service2.png" className="h-h-100"/>
                </div>
                <div className="content-box d-flex">
                  <div className="single-service-content">
                    <h5><a href="#" style={{textDecoration: 'none', fontFamily: 'var(--thm-heading)', fontWeight: 700}}>Information Security</a></h5>
                    <p>We focus on the best practices it solutions and for services.</p>
                    <a className="read-more" href="#" style={{color: 'var(--thm-teal)', textDecoration: 'none', fontSize: '14px', fontWeight: 600}}>Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                  <div className="single-service-icon"><i className="fas fa-shield-alt"></i></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service-style2 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="img-box">
                  <img alt="service" src="/images/service3.png" className="h-h-100"/>
                </div>
                <div className="content-box d-flex">
                  <div className="single-service-content">
                    <h5><a href="#" style={{textDecoration: 'none', fontFamily: 'var(--thm-heading)', fontWeight: 700}}>Software Development</a></h5>
                    <p>We focus on the best practices it solutions and for services.</p>
                    <a className="read-more" href="#" style={{color: 'var(--thm-teal)', textDecoration: 'none', fontSize: '14px', fontWeight: 600}}>Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                  <div className="single-service-icon"><i className="fas fa-code"></i></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service-style2 wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                <div className="img-box">
                  <img alt="service" src="/images/service4.png" className="h-h-100"/>
                </div>
                <div className="content-box d-flex">
                  <div className="single-service-content">
                    <h5><a href="#" style={{textDecoration: 'none', fontFamily: 'var(--thm-heading)', fontWeight: 700}}>Content Management</a></h5>
                    <p>We focus on the best practices it solutions and for services.</p>
                    <a className="read-more" href="#" style={{color: 'var(--thm-teal)', textDecoration: 'none', fontSize: '14px', fontWeight: 600}}>Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                  <div className="single-service-icon"><i className="fas fa-cogs"></i></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service-style2 wow fadeInUp" data-wow-delay="1200ms" data-wow-duration="1500ms">
                <div className="img-box">
                  <img alt="service" src="/images/service5.png" className="h-h-100"/>
                </div>
                <div className="content-box d-flex">
                  <div className="single-service-content">
                    <h5><a href="#" style={{textDecoration: 'none', fontFamily: 'var(--thm-heading)', fontWeight: 700}}>Digital Marketing</a></h5>
                    <p>We focus on the best practices it solutions and for services.</p>
                    <a className="read-more" href="#" style={{color: 'var(--thm-teal)', textDecoration: 'none', fontSize: '14px', fontWeight: 600}}>Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                  <div className="single-service-icon"><i className="fas fa-bullhorn"></i></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service-style2 wow fadeInUp" data-wow-delay="1500ms" data-wow-duration="1500ms">
                <div className="img-box">
                  <img alt="service" src="/images/service6.png" className="h-h-100"/>
                </div>
                <div className="content-box d-flex">
                  <div className="single-service-content">
                    <h5><a href="#" style={{textDecoration: 'none', fontFamily: 'var(--thm-heading)', fontWeight: 700}}>Tech Support Pro</a></h5>
                    <p>We focus on the best practices it solutions and for services.</p>
                    <a className="read-more" href="#" style={{color: 'var(--thm-teal)', textDecoration: 'none', fontSize: '14px', fontWeight: 600}}>Read More <i className="fas fa-arrow-right ms-1"></i></a>
                  </div>
                  <div className="single-service-icon"><i className="fas fa-headset"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesIntro;
