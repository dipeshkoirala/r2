import React from 'react';
import {useHistory} from 'react-router-dom'

const ExerciseCard = props => {
  const {push}=useHistory();
  const { id, name,username } = props.exercise;
 // const {pus}=props.push;
 
  return (
    <div className="exercise-card">
      <h2>{name}</h2>
      <div className="exercise-director">
       ID: <em>{id}</em>
      </div>
      <div className="exercise-metascore">
        Name: <strong>{name}</strong>
      </div>
      <h3>UserName: {username}</h3>

     {/*  {[stars].map(star => (

        <div key={star} className="exercise-star">
          {star}
        </div> */}
      
      {/* ))} */}
      <hr></hr>
       <button className="md-button bg-secondary m-2 p-2"
        onClick={() => props.push(`/update-exercise/${id}`)}>
        Update</button>
    </div>
  );
};

export default ExerciseCard;
