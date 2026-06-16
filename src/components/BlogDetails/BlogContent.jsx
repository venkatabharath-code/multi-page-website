import { Link } from 'react-router-dom';

function BlogContent() {
  return (
    <>
      <section className="blog-page-sec blog-detail-page sec-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-item-wrapper">
                <div className="blog-left-box blog-item blog-item-details">
                  <div className="img-box hover-zoom-img">
                    <img src="/images/blog1.png" alt="blog" />
                  </div>
                  <div className="content-box">
                    <div className="meta-box">
                      <ul className="meta-info d-flex">
                        <li>
                          <div className="icon"><i className="far fa-user"></i></div>
                          <span><a href="#">Admin</a></span>
                        </li>
                        <li>
                          <div className="icon"><i className="far fa-calendar-alt"></i></div>
                          <span><a href="#">October 2, 2023</a></span>
                        </li>
                        <li>
                          <div className="icon"><i className="far fa-comments"></i></div>
                          <span><a href="#">Comment (03)</a></span>
                        </li>
                      </ul>
                    </div>
                    <div className="title-box blog-title">
                      <h3><a href="#">Everything you need to learn about IT Solution for your Company.</a></h3>
                    </div>
                    <div className="blog-body">
                      <p>With over a decade of experience, we’ve established ourselves as one of the pioneering agencies in the . Our small, flexible, agile and design-led structures and processes allow us to be highly responsive and innovative. We’re made of passionate leaders, strategists, managers, developers, animators designer who work gether under one umbrella. We are a digitally-led, full-service creative agency.</p>
                      <p>The European languag are member of the same family. Their separate existence is a myth. Europe same science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their samepronunciation and their most common words.</p>
                      
                      <blockquote>
                        <i className="fas fa-quote-left"></i>
                        <p>Majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable ”</p>
                      </blockquote>
                      
                      <p>Everyone realizes why a new common language would be desirable: one could refuse to necessary have uniform translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more words. If several languages coalesce, the grammar of the resulting language is simple and regular than that of the individual languages. The new common language will be more simple and regular than the existin languages samepronunciation and their most common words.</p>
                      
                      <h4>Perfect From Beginning to End</h4>
                      <p>Transfer details Choose the amount you want to send abroad, select how your receiver wants to get the money, and lastly, how you want to pay. You will always see our fees upfront, the final amount you will pay, and the exact amount your receiver will get.</p>
                      
                      <ul className="info-list">
                        <li>Aliquam Eros Justo, Posuere Loborti Robart That</li>
                        <li>Fermentum Ullamcorper Viverra Laoreet</li>
                        <li>Lobortis, Viverra Laoreet Augue Attis Hrculies</li>
                        <li>Fermentum Ullamcorper Viverra Laoreet</li>
                      </ul>
                    </div>
                    
                    <div className="blog-tags-share">
                      <div className="blog-tags">
                        <div className="tag-title">
                          <h6>Tag:</h6>
                        </div>
                        <ul>
                          <li><a href="#">#Technology</a></li>
                          <li><a href="#">#IT Business</a></li>
                        </ul>
                      </div>
                      <div className="blog-tags blog-share">
                        <div className="tag-title">
                          <h6>Share:</h6>
                        </div>
                        <ul>
                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="blog-autor-bio">
                      <div className="avater">
                        <img src="/images/image (4).png" alt="avater" />
                      </div>
                      <div className="avater-content">
                        <h4>Ronald Richards</h4>
                        <span>Founder &amp; CEO</span>
                        <ul className="autor-social">
                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                        <p>Delicate and specialty items are handled with the utmost care. We have specialized processes for such items to ensure they are cleaned gently and returned to you in pristine condition.</p>
                      </div>
                    </div>
                    
                    <div className="blog-comments">
                      <h3>Comments (03)</h3>
                      <ul className="comment-list">
                        <li className="comment-item">
                          <div className="post-comment">
                            <div className="comment-avater">
                              <img src="/images/image (5).png" alt="Comment Author" />
                            </div>
                            <div className="comment-content">
                              <h4 className="name">Brooklyn Simmons</h4>
                              <span className="commented-on"><i className="far fa-calendar-alt"></i>28 April, 2023</span>
                              <p className="text">There are many different types of roofing materials to choose from, including asphalt shingles, Metal roofing, wood shakes, clay tiles, and slate. Each material has its</p>
                              <div className="reply_and_edit">
                                <a className="reply-btn" href="#">Reply <i className="fas fa-reply"></i></a>
                              </div>
                            </div>
                          </div>
                          <ul className="children">
                            <li className="comment-item">
                              <div className="post-comment">
                                <div className="comment-avater">
                                  <img src="/images/image (6).png" alt="Comment Author" />
                                </div>
                                <div className="comment-content">
                                  <h4 className="name">Marvin McKinney</h4>
                                  <span className="commented-on"><i className="far fa-calendar-alt"></i>20 October, 2023</span>
                                  <p className="text">Is a statement that highlights the importance of providing high-quality auto repair services. It suggests that the company or individual</p>
                                  <div className="reply_and_edit">
                                    <a className="reply-btn" href="#">Reply <i className="fas fa-reply"></i></a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="comment-item">
                          <div className="post-comment">
                            <div className="comment-avater">
                              <img src="/images/image (5).png" alt="Comment Author" />
                            </div>
                            <div className="comment-content">
                              <h4 className="name">Ronald Richards</h4>
                              <span className="commented-on"><i className="far fa-calendar-alt"></i>06 June, 2023</span>
                              <p className="text">There are many different types of roofing materials to choose from, including asphalt shingles, Metal roofing, wood shakes, clay tiles, and slate. Each material has its</p>
                              <div className="reply_and_edit">
                                <a className="reply-btn" href="#">Reply <i className="fas fa-reply"></i></a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="blog-contact-form">
                      <h3>Add Your Comment</h3>
                      <p>Get in touch with us to see how we can help you with your project</p>
                      <form className="itco-cform">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="contact-field">
                              <input type="text" id="firstn" placeholder="Enter Name" name="firstn" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="contact-field">
                              <input type="text" id="lastn" placeholder="Enter Email" name="lastn" />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="contact-field">
                              <textarea name="message" id="message" cols="40" rows="5" placeholder="Enter Message..."></textarea>
                            </div>
                            <div className="itco-form-btn">
                              <button className="thm-btn mt-3"><span className="txt">Submit Now</span></button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="sidebar ms-xl-4">
                
                <div className="sidebar-item" style={{border: '1px solid #efefef', borderRadius: '8px', padding: '30px', marginBottom: '30px'}}>
                  <h4 className="blog-sidebar-title" style={{fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: 'var(--thm-black)', fontFamily: 'var(--thm-heading)'}}>Search</h4>
                  <form className="d-flex position-relative">
                    <input type="text" placeholder="Search here..." style={{width: '100%', border: '1px solid #efefef', borderRadius: '6px', padding: '15px 20px', outline: 'none', fontSize: '15px', color: '#666'}} />
                    <button type="submit" style={{position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--thm-black)', fontSize: '16px'}}><i className="fas fa-search"></i></button>
                  </form>
                </div>

                <div className="sidebar-item" style={{border: '1px solid #efefef', borderRadius: '8px', padding: '30px', marginBottom: '30px'}}>
                  <h4 className="blog-sidebar-title" style={{fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: 'var(--thm-black)', fontFamily: 'var(--thm-heading)'}}>Categories</h4>
                  <ul className="blog-details-cat-list" style={{listStyle: 'none', padding: 0, margin: 0}}>
                    <li style={{marginBottom: '10px'}}><a href="#">Content Management <i className="fas fa-arrow-right"></i></a></li>
                    <li style={{marginBottom: '10px'}}><a href="#">Information Security <i className="fas fa-arrow-right"></i></a></li>
                    <li style={{marginBottom: '10px'}}><a href="#">Software Development <i className="fas fa-arrow-right"></i></a></li>
                    <li style={{marginBottom: '10px'}}><a href="#">Web Analysis <i className="fas fa-arrow-right"></i></a></li>
                    <li style={{marginBottom: '10px'}}><a href="#">Digital Marketing <i className="fas fa-arrow-right"></i></a></li>
                    <li><a href="#">Tech Support Pro <i className="fas fa-arrow-right"></i></a></li>
                  </ul>
                </div>

                <div className="sidebar-item" style={{border: '1px solid #efefef', borderRadius: '8px', padding: '30px', marginBottom: '30px'}}>
                  <h4 className="blog-sidebar-title" style={{fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: 'var(--thm-black)', fontFamily: 'var(--thm-heading)'}}>Recent Posts</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex gap-3 mb-4 pb-0">
                      <img src="/images/image (21).png" alt="blog" style={{width: '80px', height: '70px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0}} />
                      <div>
                        <p style={{fontSize: '13px', color: '#666', marginBottom: '5px'}}><i className="far fa-calendar-alt me-2" style={{color: 'var(--thm-teal)'}}></i>Oct 2, 2023</p>
                        <h5 style={{fontSize: '15px', fontWeight: 700, fontFamily: 'var(--thm-heading)', lineHeight: 1.4, margin: 0}}><Link to="/blog-details" style={{color: 'var(--thm-black)', textDecoration: 'none'}} className="hover-teal">Efficiency redefined through technology.</Link></h5>
                      </div>
                    </li>
                    <li className="d-flex gap-3 pb-0">
                      <img src="/images/image (22).png" alt="blog" style={{width: '80px', height: '70px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0}} />
                      <div>
                        <p style={{fontSize: '13px', color: '#666', marginBottom: '5px'}}><i className="far fa-calendar-alt me-2" style={{color: 'var(--thm-teal)'}}></i>Oct 2, 2023</p>
                        <h5 style={{fontSize: '15px', fontWeight: 700, fontFamily: 'var(--thm-heading)', lineHeight: 1.4, margin: 0}}><Link to="/blog-details" style={{color: 'var(--thm-black)', textDecoration: 'none'}} className="hover-teal">IT Solution for your Company.</Link></h5>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-item" style={{border: '1px solid #efefef', borderRadius: '8px', padding: '30px'}}>
                  <h4 className="blog-sidebar-title" style={{fontSize: '22px', fontWeight: 700, marginBottom: '20px', color: 'var(--thm-black)', fontFamily: 'var(--thm-heading)'}}>Tags</h4>
                  <div className="blog-tags d-flex flex-wrap gap-2">
                    <a href="#" style={{padding: '6px 18px', background: '#e6f9f5', color: 'var(--thm-black)', borderRadius: '4px', fontSize: '14px', textDecoration: 'none', fontWeight: 500}} className="hover-bg-teal">Interiour</a>
                    <a href="#" style={{padding: '6px 18px', background: '#e6f9f5', color: 'var(--thm-black)', borderRadius: '4px', fontSize: '14px', textDecoration: 'none', fontWeight: 500}} className="hover-bg-teal">Software</a>
                    <a href="#" style={{padding: '6px 18px', background: '#e6f9f5', color: 'var(--thm-black)', borderRadius: '4px', fontSize: '14px', textDecoration: 'none', fontWeight: 500}} className="hover-bg-teal">Design</a>
                    <a href="#" style={{padding: '6px 18px', background: '#e6f9f5', color: 'var(--thm-black)', borderRadius: '4px', fontSize: '14px', textDecoration: 'none', fontWeight: 500}} className="hover-bg-teal">Web Planting</a>
                    <a href="#" style={{padding: '6px 18px', background: '#e6f9f5', color: 'var(--thm-black)', borderRadius: '4px', fontSize: '14px', textDecoration: 'none', fontWeight: 500}} className="hover-bg-teal">Daily Inspiration</a>
                  </div>
                </div>

              </div>
            </div>
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
                <button className="thm-btn hover-scale-btn" style={{border: 'none', borderRadius: '4px', padding: '12px 35px', background: 'var(--thm-teal)', color: '#fff', fontWeight: 600, cursor: 'pointer'}}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogContent;
