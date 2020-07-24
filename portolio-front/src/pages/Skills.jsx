import React, { useState, useCallback } from "react";
import "../styles/Skills.scss";
import "animate.css/animate.min.css";
import { useTransition, animated } from "react-spring";

const pages = [
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="divSeparate">
        <p>HTML</p>
        <img className="HTML" src="HTML.png" alt="HTML logo" />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="divSeparate">
        <p>CSS</p>
        <img className="CSS" src="CSS.png" alt="CSS logo" />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="divSeparate">
        <p>Javascript</p>
        <img className="js" src="JS.png" alt="Javascript logo" />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="divSeparate">
        <p>React</p>{" "}
        <img className="react" src="./react.png" alt="react logo" />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="Separate">
        <p>Node.js</p>
        <img className="node" src="./node.png" alt="node.JS logo" />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="divSeparate">
        <p>Material UI</p>
        <img className="material" src="./material.png" alt="material UI logo" />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="divSeparate">
        <p>Figma</p>
        <img className="figma" src="./figma.png" alt="figma logo" />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div className="animation" style={{ ...style }}>
      <div className="divSeparate">
        <p>SQL</p>
        <img className="mysql" src="./mysql.png" alt="mySQL logo" />
      </div>
    </animated.div>
  ),
];
export default function Skills() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 8), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <div className="skills" onClick={onClick}>
      <h1 className="animate__animated animate__fadeInTopLeft">
        Click here to discover my Skills
      </h1>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} className="contentSkills" />;
      })}
    </div>
  );
}
