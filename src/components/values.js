import './values.css';
import Star from './star.png';
import {useEffect, useState} from 'react';

function Values() {
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
        <section className="values">
            <div>
                <p className="text-title">도전을 좋아하는 개발자</p>
            </div>
            <div className="values-container" style={{
                opacity: (position-1500)/200,
            }}>
                <div className="values-intro">
                    <p className="values-title">끊임없는 성장과 학습&nbsp;<img className="star" src={Star} alt="star" /></p>
                    <p className="values-explain"> 저는 항상 새로운 기술과 도구에 도전하며, 
                        지식을 확장하고 개발 업계의 최신 트렌드를 따라가기 위해 노력합니다. 
                        내 업무를 통해 점차 더 나은 개발자로 성장하고자 항상 노력하고 있습니다.</p>
                </div>
                <div className="values-intro">
                    <p className="values-title">문제 해결 능력&nbsp;<img className="star" src={Star} alt="star" /></p>
                    <p className="values-explain">어려운 과제와 복잡한 문제에 대한 도전을 즐깁니다. 
                        이러한 도전들은 저에게 새로운 관점을 제공하고 창의적인 문제 해결 능력을 키우는데 도움이 됩니다.</p>
                </div>
                <div className="values-intro">
                    <p className="values-title">협업과 공유&nbsp;<img className="star" src={Star} alt="star" /></p>
                    <p className="values-explain">도전 정신은 혼자서만 이루기 어려운 것입니다. 
                        저는 팀 내에서의 협력과 지식 공유를 통해 모든 도전을 극복하고 함께 성장하려는 의지를 가지고 있습니다. 
                        다른 개발자와 경험을 공유하며 함께 발전하는 것이 중요하다고 생각합니다.</p>
                </div>
                <div className="values-intro">
                    <p className="values-title">품질과 완성도&nbsp;<img className="star" src={Star} alt="star" /></p>
                    <p className="values-explain">도전을 받아들이면 항상 품질과 완성도를 우선시합니다. 
                        나는 코드를 작성하고 시스템을 설계할 때 최상의 품질을 유지하고 유지 보수가 용이한 솔루션을 제공하기 위해 노력합니다.</p>
                </div>
            </div>
        </section>
    );
}

export default Values;