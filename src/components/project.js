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
                    제가 참여한 프로젝트는 Workforus라는 그룹웨어 시스템 개발 프로젝트입니다. 
                    이 프로젝트에서 주요 기능으로는 로그인, 회원가입, 내정보관리, 그리고 메신저를 구현하였습니다.
                    로그인과 회원가입 부분은 Spring Security를 활용하여 구현하였으며, UI 및 UX 디자인은 기존 디자인을 사용하였습니다. 
                    반면 메신저 기능은 직접 디자인하여 구현했으며, WebSocket와 stomp를 활용하여 웹통신을 구현했습니다.
                    이 프로젝트는 저의 학원에서 진행한 팀 프로젝트이자 제 첫 프로젝트입니다. 
                    저와 팀원들은 학원 초기 스터디 그룹의 구성원으로 프로젝트를 수행했습니다. 
                    이 프로젝트를 통해 협업의 중요성과 협업을 위한 GitHub 관리 방법을 배웠습니다. 
                    첫 프로젝트인 만큼 욕심도 컸지만 시간적 제약으로 완전히 구현하지 못한 아쉬움이 남습니다.
                    이 프로젝트를 통해 기술적인 역량을 향상시키고, 팀 협업 및 소통 능력을 개선하는 소중한 경험을 얻었습니다
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