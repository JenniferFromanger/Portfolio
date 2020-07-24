import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Aside.scss";

export default function Aside() {
  const initialState = {
    textHomepage: false,
    textContact: false,
    textProject: false,
    textSkill: false,
  };

  function reducer(state = { ...initialState }, action) {
    switch (action.type) {
      case "setTextHomepage":
        return { textHomepage: (state.textHomepage = true) };
      case "setImageHomepage":
        return { textHomepage: (state.textHomepage = false) };
      case "setTextContact":
        return { textContact: (state.textContact = true) };
      case "setImageContact":
        return { textContact: (state.textContact = false) };
      case "setTextProject":
        return { textProject: (state.textProject = true) };
      case "setImageProject":
        return { textProject: (state.textProject = false) };
      case "setTextSkill":
        return { textSkill: (state.textSkill = true) };
      case "setImageSkill":
        return { textProject: (state.textSkill = false) };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="asideMenu">
      <img className="avatar" src="/avatar.png" alt="my avatar" />
      <NavLink
        exact
        to="/"
        onMouseEnter={() => dispatch({ type: "setTextHomepage" })}
        onMouseLeave={() => dispatch({ type: "setImageHomepage" })}
      >
        {!state.textHomepage ? (
          <img className="picto" src="/house.png" alt="homepage" />
        ) : (
          <p>Homepage</p>
        )}
      </NavLink>
      <NavLink
        to="/contact"
        onMouseEnter={() => dispatch({ type: "setTextContact" })}
        onMouseLeave={() => dispatch({ type: "setImageContact" })}
      >
        {!state.textContact ? (
          <img className="picto" src="/contact.png" alt="contact-me" />
        ) : (
          <p>Contact-me</p>
        )}
      </NavLink>
      <NavLink
        to="/projects"
        onMouseEnter={() => dispatch({ type: "setTextProject" })}
        onMouseLeave={() => dispatch({ type: "setTextProject" })}
      >
        {!state.textProject ? (
          <img className="picto" src="/project.png" alt="my work" />
        ) : (
          <p>My work</p>
        )}
      </NavLink>
      <NavLink
        to="/Skills"
        onMouseEnter={() => dispatch({ type: "setTextSkill" })}
        onMouseLeave={() => dispatch({ type: "setImageSkill" })}
      >
        {!state.textSkill ? (
          <img className="picto" src="/skill.png" alt="my skills" />
        ) : (
          <p>My skills</p>
        )}
      </NavLink>
      <NavLink to="/Private">
        <img className="picto" src="/log-in.png" alt="private " />
      </NavLink>
    </div>
  );
}
