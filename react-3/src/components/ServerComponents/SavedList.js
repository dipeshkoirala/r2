import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SavedList({ list }) {
  console.log("Initialvalue for the list is empty:",list)
  return (
    <div className="saved-list bg-success">
      <h3>Saved Exercise:</h3>
      {list.map(exercise=> {
        return (
          <NavLink
            to={`/exercise/${exercise.id}`}
            key={exercise.id}
            activeClassName="saved-active"
          >
            <span className="saved-exercise">{exercise.name}</span>
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
