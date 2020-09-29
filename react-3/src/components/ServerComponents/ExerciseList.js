import React from "react";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import Client from './Client'

function ExerciseList({ exercise,client}) {
  console.log("this is my mv", exercise)
  return (
    <>
 <div className="client-list bg-info">
      {
        client.map(ex => (
          <div className="bg-success col-5 p-2 float-right">
          <Link key={ex.id} to={`/client/${ex.id}`}>
            <Client client={ex} />
           </Link>
           </div>
        ))
      }
    </div>

    <div className="exercise-list col-2 bg-success float-left">
      {
        exercise.map(ex => (
          <div className="bg-primary">
          <Link key={ex.id} to={`/exercise/${ex.id}`}>
            <ExerciseCard exercise={ex} />
           </Link>
           </div>
        ))
      }
    </div>
    </>
  );
}

export default ExerciseList;
