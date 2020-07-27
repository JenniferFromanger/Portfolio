import React from "react";
import Auth from "../components/Auth";
import Dashboard from "../components/Dashboard";
import { useSelector } from "react-redux";
import "../styles/Private.scss";

export default function Private() {
  const isLoggedIn = useSelector((state) => state.loggedIn);
  return <div className="login">{!isLoggedIn ? <Auth /> : <Dashboard />}</div>;
}
