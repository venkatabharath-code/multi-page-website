function HomeHero() {
  return (
    <section className="hero-sec bg-green hero-ptb">
      <div className="hero-bg-pattern"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="hero-tagline-text">IT solutions for the new era</span>
              <h1 className="hero-title text-white">Beautiful IT services <br/>for your success</h1>
              <p className="text-white">Leverage agile frameworks to provide a robust synopsis for high level overviews terative approaches bring table survival.</p>
              <div className="hero-btn-area d-flex align-items-center">
                <a className="thm-btn" href="/about"><span className="txt">Read More</span></a>
                <div className="play-btn-wrapper d-flex align-items-center">
                  <a href="#" className="play-btn-outline"><i className="fas fa-play"></i></a>
                  <span className="play-intro">Play Intro</span>
                </div>
              </div>
              <div className="hero-team-info d-flex align-items-center">
                <div className="team-members d-flex">
                  <div className="team-members-img"><img src="/images/emp1.png" alt="profile" width="56" height="56"/></div>
                  <div className="team-members-img"><img src="/images/emp2.png" alt="profile" width="56" height="56"/></div>
                  <div className="team-members-img"><img src="/images/emp3.png" alt="profile" width="56" height="56"/></div>
                  <div className="team-members-img"><img src="/images/emp4.png" alt="profile" width="56" height="56"/></div>
                  <div className="team-members-img"><img src="/images/emp5.png" alt="profile" width="56" height="56"/></div>
                </div>
                <div className="total-team-count">
                  <span>36k+</span>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-images hero-style1">
              <div className="hero-feature-img feature-one">
                <img src="/images/image (7).png" alt="hero-img" width="636" height="600"/>
              </div>
              <div className="hero-info-img feature-two">
                <img src="/images/image (8).png" alt="hero-info" width="238" height="143"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
