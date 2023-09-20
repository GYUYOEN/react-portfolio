import './project.css';
import WorkForUs from './workforus.gif';

function Project() {
    return (
        <section className="project">
            <div>
                <p className="project-title">Project</p>
            </div>
            <div>
                <img className="workforus" src={WorkForUs} alt="workforus" />
                <div className="project-container">
                    <p className="project-subject">Work For Us</p>
                    <p className="project-explain">
                    workforus는 회사나 학업에서 자주 사용하는 그룹웨어 시스템입니다.
                    일정관리, 메일, 메신저, 근태관리, 게시판, 주소록의 기능이 있습니다.
                    제가 담당한 기능은 로그인, 회원가입, 내정보관리, 메신저 입니다. 
                                        
                    로그인과 회원가입은 spring security룰 사용하였습니다. 
                    로그인과 회원가입의 UI & UX는 기존에 있던 디자인을 사용하였지만
                    메신저는 직접 디자인을 구현하였습니다.
                    메신저 구현은 WebSocket와 stomp를 이용함으로써 웹통신이 어떻게 이루어지는지 아는 중요한 계기가 되었습니다.
                    
                    학원에서 진행한 팀프로젝트이자 저의 첫 프로젝트입니다.
                    팀원은 학원 초반에 들어간 스터디모임 맴버들과 진행하였습니다.
                    팀프로젝트를 하면서 혐업이 무엇이고 협업에서 Github 관리는 어떻게 이루어지는지고 어떻게 진행해야지 편리한지 배웠습니다.
                    첫 프로젝트인 만큼 욕심도 컸지만 시간이 정해져 있어 욕심을 못이룬 아쉬움이 컸습니다.
                    <br/><br/>
                    프로젝트 방식 : Spring MVC<br/>
                    사용 프로그램 : Eclipse, Oracle, Maven, Github<br/>
                    사용 언어 : Java, Html, Css, JavaScript, MyBatis, bootstrap, WebSocket, Stomp<br/>
                    Github 주소 : https://github.com/hong-yura/WorkForUs-Project<br/>
                    배포 주소 : https://workforus.site<br/>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Project;