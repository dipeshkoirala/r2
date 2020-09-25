import React from "react";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercise }) {
  return (
    <div className="exercise-list">
      {
        exercise.map(exercise => (
          <Link key={exercise.id} to={`/exercise/${exercise.id}`}>
            <ExerciseCard exercise={exercise} />
          </Link>
        ))
      }
    </div>
  );
}

export default ExerciseList;
