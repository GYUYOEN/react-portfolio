import './aboutme.css';
import Me from './me.jpg';
import {useEffect, useState} from 'react';

function AboutMe() {
    const [position, setPosition] = useState(0);
    function onScroll() {
        console.log(window.scrollY)
        setPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <section className='aboutme'>
            <div>
                <p className='text-aboutme'>About Me</p>
                <img className='me' src={Me} alt="me" style={
                    position>810 ? {top: '50%' ,left: '530px'} : {transform: `translate(${(position-500)}px)`}
                }/>
                <div className='me-introduce' style={
                    position>810 ? {top: '52%' ,right: '530px'} : {transform: `translate(-${(position-400)}px)`}
                }>
                    <p className='aboutme-text'>이름 : 김규연</p>
                    <p className='aboutme-text'>생일 : 1996.10.21</p>
                    <p className='aboutme-text'>거주지 : 경기도 안산시 상록구</p>
                    <p className='aboutme-text'>지원분야 : 백앤드 개발자</p>
                    <p className='aboutme-text'>한줄소개 : 성실한 신입 백앤드 개발자로서 열심히 노력 중입니다.<br/> 함께 성장하고 배우는 즐거움을 공유하고 싶습니다. 😊👨‍💻</p>
                    <p className='more-about-me'><a href="https://bolder-sousaphone-710.notion.site/d9834112174d4118a778e2be8978b36e?pvs=4">More About Me</a></p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;