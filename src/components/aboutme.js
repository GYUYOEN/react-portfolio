import './aboutme.css';
import Me from './me.jpg';

function AboutMe() {
    return (
        <section className='aboutme'>
            <div>
                <p className='text-aboutme'>About Me</p>
                <img className='me' src={Me} alt="me" />
                <div className='me-introduce'>
                    <p className='aboutme-text'>이름 : 김규연</p>
                    <p className='aboutme-text'>생일 : 1996.10.21</p>
                    <p className='aboutme-text'>거주지 : 경기도 안산시 상록구</p>
                    <p className='aboutme-text'>지원분야 : 백앤드 개발자</p>
                    <p className='aboutme-text'>한줄소개 : 성실한 신입 백앤드 개발자로서 열심히 노력 중입니다.<br/> 함께 성장하고 배우는 즐거움을 공유하고 싶습니다. 😊👨‍💻</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;