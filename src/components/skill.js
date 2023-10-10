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
import Dev from "./developer.png";

import {useEffect, useState} from 'react';

var flag = true;
function Skill() {
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
  
  if(position>3200 && flag) {
    draw(70, ".pie-chart1", "#1E82FF");
    draw(70, ".pie-chart2", "#1E82FF");
    draw(60, ".pie-chart3", "#1E82FF");
    draw(60, ".pie-chart4", "#1E82FF");
    draw(30, ".pie-chart5", "#1E82FF");
    draw(10, ".pie-chart6", "#1E82FF");
    draw(10, ".pie-chart7", "#1E82FF");
    draw(60, ".pie-chart8", "#1E82FF");
    flag  = false;
  } 

  function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
      if (i < max) {
        color1(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 20);
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
            <p className="number">70%</p>
          </span>
        </div>
        <div className="pie-chart pie-chart2">
          <span className="center">
            <img className="icon" src={Js} alt="icon"></img>
            <p className="number">70%</p>
          </span>
        </div>
        <div className="pie-chart pie-chart3">
          <span className="center">
            <img className="icon" src={Css} alt="icon"></img>
            <p className="number">60%</p>
          </span>
        </div>
        <div className="pie-chart pie-chart4">
          <span className="center">
            <img className="icon" src={Html} alt="icon"></img>
            <p className="number">60%</p>
          </span>
        </div>
        <br />
        <div className="pie-chart pie-chart8">
          <span className="center">
            <img className="icon" src={Mysql} alt="icon"></img>
            <p className="number">60%</p>
          </span>
        </div>
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
      </div>
      <div className="skill-text">
        <p><p className="skill-text-title">나의 주언어<img className="developer" src={Dev} alt="developer"></img></p> : JAVA</p>
        <p className="skill-text-title">사용해왔던 기술들<img className="developer" src={Dev} alt="developer"></img></p>
        <p>- BackEnd : Spring, Jsp</p>
        <p>- DataBase(DB) : MariaDB, MySql, Oracle, MyBatis, Jpa</p>
        <p>- FrontEnd : Html, Css, JavaScript</p>
        <p><p className="skill-text-title">현재 관심있는 언어<img className="developer" src={Dev} alt="developer"></img></p> : C++, React</p>
      </div>
    </section>
  );
}

export default Skill;
