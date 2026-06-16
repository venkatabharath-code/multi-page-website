import { Link } from 'react-router-dom';

function TeamIntro() {
  return (
    <>
      <section id="site-breadcumb">
        <div className="site-breadcumb-wrapper">
          <div className="container">
            <div className="breadcumb-content text-center">
              <h1 className="breadcumb-title">Our Team</h1>
              <ul className="page-navigator">
                <li><Link to="/">Home</Link></li>
                <li>Our Team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-intro-sec sec-ptb" style={{backgroundColor: '#eefaf7', paddingBottom: 0}}>
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-6 offset-lg-3">
              <h6 className="sec-sub-title">Our Team</h6>
              <h2 className="sec-title">Meet Our Expert Professional Team</h2>
              <p className="sec-text">Nifty team is a diverse network of consultants and industry professionals with a global mindset.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamIntro;
