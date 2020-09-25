import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3>Saved Exercise:</h3>
      {list.map(exercise=> {
        return (
          <NavLink
            to={`/exercise/${exercise.id}`}
            key={exercise.id}
            activeClassName="saved-active"
          >
            <span className="saved-exercise">{exercise.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default SavedList;
