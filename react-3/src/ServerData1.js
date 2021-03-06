import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./components/ServerComponents/SavedList";
import ExerciseList from "./components/ServerComponents/ExerciseList";
import Exercise from "./components/ServerComponents/Exercise1";
//import axios from 'axios';
import {AxiosCall} from './components/AxiosCall'
import UpdateExercise from './components/ServerComponents/UpdateExercise'

const ServerData1 = () => {
  const [savedList, setSavedList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [client, setClient]=useState([])

  const getExerciseList = () => {
    AxiosCall()
    .get(`/instructors/clients`)
      
      .then(res =>{ console.log("dk-Checkthis out:::=>",res.data)
       setExerciseList(res.data)})
      .catch(err => console.log(err.response));
  };
/* useEffect(()=>{ */
    const getClientList = () => {
    AxiosCall()
    .get(`/classes`)
      
      .then(res =>{ console.log("dk-Checkthis out:::=>",res.data)
       setClient(res.data)})
      .catch(err => console.log(err.response));
  };

/* ,[]) */


  const addToSavedList = ex => {
    setSavedList([...savedList, ex]);
  };

  useEffect(() => {
    getExerciseList();
    
    
  }, []);

  useEffect(() => {
   getClientList();
    
    
  }, []);

  return (
    <>
      <SavedList list={savedList}  />
      
     
      {/* <Route exact path="/"> */}
        <ExerciseList exercise={exerciseList} client={client} />  {/* 1.lets do it first */}
      {/* </Route> */}

       {/* <Route path="/exercise/:id">  */}
        <Exercise addToSavedList={addToSavedList} />
     {/*   </Route>  */}
 
      <Route path="/update-exercise/:id"
     render={()=> <UpdateExercise exercise={exerciseList} setExerciseList={setExerciseList} addToSavedList={addToSavedList}/>}
      />
    </>
  );
};

export default ServerData1;
