import { Link } from 'react-router-dom';

function BlogHeader() {
  return (
    <>
      {/* breadcrumb */}
      <section id="site-breadcumb">
        <div className="site-breadcumb-wrapper anim-hero-bg">
          <div className="container">
            <div className="breadcumb-content d-flex justify-content-between align-items-center text-start">
              <h1 className="breadcumb-title mb-0 anim-slide-up">Blog Details</h1>
              <div className="d-flex align-items-center anim-slide-up anim-delay-1" style={{gap: '12px'}}>
                <Link to="/" style={{color: 'rgba(255,255,255,.6)', textDecoration: 'none', fontSize: '15px', fontWeight: 500}}>Home</Link>
                <i className="fas fa-chevron-right" style={{color: 'rgba(255,255,255,.4)', fontSize: '12px'}}></i>
                <span style={{color: '#fff', fontSize: '15px', fontWeight: 600}}>Blog Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHeader;
