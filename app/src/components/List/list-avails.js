import React from "react";
import "./style.css";

/*  Avails form */
export function List({ children }) {
  return (
    <div className="avails-form-list">
      <div className="avails-group">{ children }</div>
    </div>
  );
}

export function ListDiv({ children }) {
  return <div className="avails-list-item">{ children }</div>;
}




