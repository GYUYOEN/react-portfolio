import './main.css';
import Heart from './heart.png';

function Main() {
    return (
      <section className="main">
        <div className="my-photo">
          <p className="title-welcome">Welcome:)</p>
          <p className="title-name">GyuYeon</p>
          <p className="title-developer">DEVELOPER</p>
          <p className="title-portfolio">portfolio<img className="heart" src={Heart} alt="heart"></img></p>
        </div>
      </section>
    );
}

export default Main;