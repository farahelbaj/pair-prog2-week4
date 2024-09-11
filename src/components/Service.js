import React, { useState } from "react";

const Service = ({ id, icon, title, text, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const handleDelete = () => {
    onDelete(id); 
  };

  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};
export default Service;
