import React from "react";

import "./skill.css";
import $ from "jquery";

import Java from "./java.png";
import Css from "./css.png";
import Html from "./html.png";
import Js from "./js.png";
import Linux from "./linux.png";
import Mysql from "./mysql.png";
import Reac from "./react.png";
import Cp from "./c++.png";

function Skill() {
  $(window).ready(function () {
    draw(70, ".pie-chart1", "#ff6600");
    draw(70, ".pie-chart2", "#f57723");
    draw(60, ".pie-chart3", "#449064");
    draw(60, ".pie-chart4", "#ffa76d");
    draw(30, ".pie-chart5", "#f3b891");
    draw(10, ".pie-chart6", "#ffd8bd");
    draw(10, ".pie-chart7", "#ffecdf");
    draw(60, ".pie-chart8", "#fff7f2");
  });

  function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
      if (i < max) {
        color1(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 10);
  }
  

  function color1(i, classname, colorname) {
    $(classname).css({
      "background":
        "conic-gradient(" +
        colorname +
        " 0% " +
        i +
        "%, #ffffff " +
        i +
        "% 100%)",
    });
  }

  return (
    <section className="skill">
      <div>
        <p className="skill-title">Skill</p>
      </div>
      <div className="chart-container">
        <div className="pie-chart pie-chart1">
          <span className="center">
            <img className="icon" src={Java} alt="icon"></img>
            <p className="number">70</p>
          </span>
        </div>
        <div className="pie-chart pie-chart2">
          <span className="center">
            <img className="icon" src={Js} alt="icon"></img>
            <p className="number">70</p>
          </span>
        </div>
        <div className="pie-chart pie-chart3">
          <span className="center">
            <img className="icon" src={Css} alt="icon"></img>
            <p className="number">60</p>
          </span>
        </div>
        <div className="pie-chart pie-chart4">
          <span className="center">
            <img className="icon" src={Html} alt="icon"></img>
            <p className="number">60</p>
          </span>
        </div>
        <br />
        <div className="pie-chart pie-chart5">
          <span className="center">
            <img className="icon" src={Linux} alt="icon"></img>
            <p className="number">30%</p>
          </span>
        </div>
        <div className="pie-chart pie-chart6">
          <span className="center">
            <img className="icon" src={Reac} alt="icon"></img>
            <p className="number">10%</p>
          </span>
        </div>
        <div className="pie-chart pie-chart7">
          <span className="center">
            <img className="icon" src={Cp} alt="icon"></img>
            <p className="number">10%</p>
          </span>
        </div>
        <div className="pie-chart pie-chart8">
          <span className="center">
            <img className="icon" src={Mysql} alt="icon"></img>
            <p className="number">60%</p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skill;
