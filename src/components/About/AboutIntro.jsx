import { Link } from 'react-router-dom';

function AboutIntro() {
  return (
    <>
      {/* breadcrumb */}
      <section id="site-breadcumb">
        <div className="site-breadcumb-wrapper">
          <div className="container">
            <div className="breadcumb-content text-center">
              <h1 className="breadcumb-title">About Us</h1>
              <ul className="page-navigator">
                <li><Link to="/">Home</Link></li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* about intro */}
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
                  <Link className="thm-btn" to="/contact"><span className="txt">Contact Us</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutIntro;
