import React from 'react';
import { Link } from 'react-router-dom';
import './CreatorCard.css'; // optional for styling

function CreatorCard({ id, name, url, description, imageURL, onDelete }) {
  return (
    <div className="creator-card">
      <img src={imageURL} alt={name} className="creator-image" />
      <h2 style={{ color: "#1E90FF" }}>{name}</h2>
        <p style={{ color: "#000000" }}>{description}</p>

      <a href={url} target="_blank" rel="noopener noreferrer">Visit Website</a>

      <div className="creator-actions">
        <Link to={`/edit/${id}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/creators/${id}`}>
          <button>View</button>
        </Link>
        <button onClick={() => {
          if (window.confirm('Are you sure you want to delete this creator?')) {
            onDelete(id);
          }
        }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CreatorCard;
