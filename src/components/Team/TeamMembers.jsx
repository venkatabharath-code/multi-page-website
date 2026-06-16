import { Link } from 'react-router-dom';

const teamMembersData = [
  { id: 1, name: 'Edoardo Romussi', role: 'Ui/Ux Designer', img: '/images/emp1.png' },
  { id: 2, name: 'Jessica James', role: 'Marketing Coordinator', img: '/images/emp2.png' },
  { id: 3, name: 'Adrian Williams', role: 'Web Designer', img: '/images/emp3.png' },
  { id: 4, name: 'Laci Pletcher', role: 'Process Analyst', img: '/images/emp4.png' },
  { id: 5, name: 'Alex Brown', role: 'Co-Founder', img: '/images/emp5.png' },
  { id: 6, name: 'Rebecca Davis', role: 'Web Developer', img: '/images/emp6.png' }
];

function TeamMembers() {
  return (
    <>
      <section className="team-intro-sec sec-ptb" style={{backgroundColor: '#eefaf7', paddingTop: 0}}>
        <div className="container">
          <div className="row gy-4">
            {teamMembersData.map(member => (
              <div key={member.id} className="col-md-6 col-lg-4">
                <div className="single-team text-center">
                  <div className="member-img">
                    <img src={member.img} alt="team" width="300" height="300" style={{width: '100%', height: '380px', objectFit: 'cover'}}/>
                  </div>
                  <ul className="team-social list-unstyled">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                  <div className="member-info">
                    <h4 className="member-name"><a href="#">{member.name}</a></h4>
                    <span className="member-cat text-muted">{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-cta sec-ptb bg-green">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="sec-title text-white mb-2">Want to Join Our Team?</h2>
              <p style={{color: 'rgba(255,255,255,.75)', margin: 0}}>We are always looking for talented individuals to join our growing team. Send us your resume today.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link className="thm-btn" to="/contact"><span className="txt">Apply Now</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamMembers;
