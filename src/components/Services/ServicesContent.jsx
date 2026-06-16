const pricingTiers = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 110,
    isPopular: false,
    features: [
      'Key Words Optimized',
      'Top 10 Ranking Guarantee',
      'Weekly Reporting',
      'Unlimited users'
    ]
  },
  {
    id: 'popular',
    name: 'Popular',
    price: 210,
    isPopular: true,
    features: [
      'Key Words Optimized',
      'Top 10 Ranking Guarantee',
      'Weekly Reporting',
      'Unlimited users'
    ]
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 310,
    isPopular: false,
    features: [
      'Key Words Optimized',
      'Top 10 Ranking Guarantee',
      'Weekly Reporting',
      'Unlimited users'
    ]
  }
];

function ServicesContent() {
  return (
    <>
      <section className="newslatter-sec bg-green" style={{background: 'var(--thm-green-bg)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 p-0">
              <div className="video-sec" style={{background: "url('/images/blog1.png') center/cover", height: '380px', position: 'relative', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}}>
                <div className="video-sec-overlay d-flex align-items-center justify-content-center" style={{position: 'absolute', inset: 0, background: 'rgba(14,27,25,.5)', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}}>
                  <a className="video-btn" href="#" style={{width: '70px', height: '70px', background: 'var(--thm-teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', textDecoration: 'none'}}>
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="sec-content" style={{padding: '50px 40px'}}>
                <h2 className="sec-title" style={{color: '#fff', fontSize: '36px', fontWeight: 800, fontFamily: 'var(--thm-heading)', marginBottom: '15px'}}>Subscribe to Our Newsletter</h2>
                <p className="sec-text" style={{color: 'rgba(255,255,255,.7)', marginBottom: '30px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="Subscribe-form d-sm-flex" style={{gap: '10px'}}>
                  <input type="email" className="form-control" placeholder="Enter Your Email" id="cta-email" style={{border: 'none', borderRadius: '6px', padding: '14px 20px', fontSize: '15px', outline: 'none', flexGrow: 1}} />
                  <div className="submit-btn mt-3 mt-sm-0">
                    <button type="submit" className="thm-btn" style={{background: 'var(--thm-teal)', border: 'none', padding: '14px 30px', borderRadius: '6px', color: '#fff', fontWeight: 600}}><span className="txt">Subscribe Now</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-sec sec-ptb" style={{background: '#fff', paddingTop: '100px', paddingBottom: '100px'}}>
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="sec-content text-center mb-5">
                <h6 className="sec-sub-title" style={{color: 'var(--thm-teal)', fontWeight: 600, fontSize: '16px'}}>Our Pricing</h6>
                <h2 className="sec-title" style={{color: 'var(--thm-black)', fontWeight: 800, fontFamily: 'var(--thm-heading)', fontSize: '42px'}}>Find the Right Plan</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingTiers.map((tier) => (
              <div key={tier.id} className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className={`single-pricing ${tier.isPopular ? 'popular' : ''} wow fadeInUp`} data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="pricing-badge text-center" style={tier.isPopular ? {background: 'var(--thm-teal)'} : {}}>
                    <span className="title" style={tier.isPopular ? {color: '#fff'} : {}}>{tier.name}</span>
                    <div className="pricing-price">
                      <span className="currency" style={tier.isPopular ? {color: '#fff'} : {}}>$</span>
                      <h3 className="price">{tier.price}<span style={tier.isPopular ? {color: 'rgba(255,255,255,.8)'} : {}}>/Per Month</span></h3>
                    </div>
                    <div className="pricing-btn">
                      <a className="btn" href="#" style={tier.isPopular ? {background: '#fff', color: 'var(--thm-teal)', borderRadius: '6px', fontWeight: 600, textDecoration: 'none'} : {background: 'transparent', border: '1px solid rgba(255,255,255,.3)', color: '#fff', borderRadius: '6px', fontWeight: 600, textDecoration: 'none'}}>Discover More</a>
                    </div>
                  </div>
                  <div className="pricing-content" style={{padding: '40px', textAlign: 'center'}}>
                    <ul className="pricing-list" style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {tier.features.map((feature, idx) => (
                        <li key={idx} style={{marginBottom: idx === tier.features.length - 1 ? '0' : '12px', color: '#666', fontSize: '16px'}}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-sec">
        <div className="container" style={{marginBottom: '-60px', position: 'relative', zIndex: 10}}>
          <div className="newsletter-inner d-flex align-items-center justify-content-between flex-wrap" style={{background: 'var(--thm-teal)', padding: '45px 50px', borderRadius: '8px'}}>
            <div className="newsletter-title mb-3 mb-lg-0">
              <h3 className="text-white mb-0" style={{fontSize: '26px', fontWeight: 700, lineHeight: 1.4, fontFamily: 'var(--thm-heading)'}}>Subscribe to Our Newsletter for <br/> the daily Updates</h3>
            </div>
            <div className="newsletter-form" style={{width: '100%', maxWidth: '480px'}}>
              <form className="d-flex bg-white" style={{padding: '6px', borderRadius: '4px'}}>
                <input type="email" placeholder="Enter Your Email" style={{border: 'none', outline: 'none', padding: '12px 20px', width: '100%', background: 'transparent', fontSize: '15px'}} />
                <button className="thm-btn" style={{border: 'none', borderRadius: '4px', padding: '12px 35px', background: 'var(--thm-teal)', color: '#fff', fontWeight: 600, cursor: 'pointer'}}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesContent;
