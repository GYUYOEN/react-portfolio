import './aboutme.css';
import Me from './me.jpg';

function AboutMe() {
    return (
        <section className='aboutme'>
            <div>
                <p className='text-aboutme'>About Me</p>
                <img className='me' src={Me} alt="me" />
                <div className='me-introduce'>
                    <p>이름 : 김규연</p>
                    <p>생일 : 1996.10.21</p>
                    <p>거주지 : 경기도 안산시 상록구</p>
                    <p>지원분야 : 백앤드 개발자</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;