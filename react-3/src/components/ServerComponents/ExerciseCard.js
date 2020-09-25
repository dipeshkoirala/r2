import React from 'react';
import {useHistory} from 'react-router-dom'

const ExerciseCard = props => {
  const {push}=useHistory();
  const { id, title, director, metascore, stars } = props.exercise;
 // const {pus}=props.push;
  return (
    <div className="exercise-card">
      <h2>{title}</h2>
      <div className="exercise-director">
        Director: <em>{director}</em>
      </div>
      <div className="exercise-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {[stars].map(star => (

        <div key={star} className="exercise-star">
          {star}
        </div>
      
      ))}
      <hr></hr>
       <button className="md-button bg-secondary m-2 p-2"
        onClick={() => props.push(`/update-exercise/${id}`)}>
        Update</button>
    </div>
  );
};

export default ExerciseCard;
