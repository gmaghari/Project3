import React from "react";
import "./style.css";

/* Submission form */
export function List1({ children }) {
    return (
      <div className="submission-form-list">
        <div className="subission-group">{ children }</div>
      </div>
    );
  }
  
  export function ListDiv1({ children }) {
    return <div className="submission-list-item">{ children }</div>;
  }  