import React, { useState } from "react";

const Tour = ({
  id,
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
  onDelete,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {location}
          </p>
          <p>from {cost}</p>
          <p>{duration} days</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
