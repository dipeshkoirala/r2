import React, { useEffect, useState } from "react";
// import axios from "axios";
import {AxiosCall} from '../AxiosCall'
import { useParams,useHistory } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";

function Exercise(/* { addToSavedList } */props) {
  
  const [exercise, setExercise] = useState(null);
  const params = useParams();
const {push}=useHistory();
  const fetchExercise = (id) => {
    AxiosCall()
    // axios
      // .get(`http://localhost:5000/api/fitness/${id}`)
      // .get(`/classes: ${id}`)
      .get(`/instructors/${id}/classes`)
      .then((res) =>{ setExercise(res.data)
        console.log(res.data)
      // push('/update-exercise')
    })
      .catch((err) => console.log(err.response));
  };

  const saveExercise = () => {
    props.addToSavedList(exercise);
  };


  useEffect(() => {
    fetchExercise(params.id);
  }, [params.id]);

  if (!exercise) {
    return <div>Loading exercise information...</div>;
  }
 const deleteItem = (id) => {
    id.preventDefault();
    AxiosCall()
      .delete(`${id}/classes/${id}`)
      .then((res) => {
        // res.data
        props.addToSavedList(res.data);
        push("/exercise-list");
        // res.data ==> just the id
         const newItems = props.items.filter(v => `${v.id}` !== res.data)
         props.setItems(newItems)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="save-wrapper">
      <ExerciseCard exercise={exercise} push={push}/>

      <span className="save-button bg-success" onClick={saveExercise}>
        Save
      </span>
      <br></br>
      {/* <hr></hr> */}
      <span className="delete-button bg-danger" onClick={deleteItem}>
        Delete
      </span>
      </div>
  );
}

export default Exercise;
