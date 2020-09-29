import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'

import axios from 'axios'

const initialItem=
{
    id:"",
    title:'',
    director:'',
    metascore:'',
    stars:[]
}


const UpdateExercise=(props)=>{
    
    const [ex,setEx]=useState(initialItem)
    const {push}=useHistory();
    const {id}=useParams();
    useEffect(()=>{
        axios
        .get(`/classes/${id}`)
        .then((res)=>{
            
           // console.log(res.data)
            setEx(res.data)
        })
        .catch((err)=>console.log(err))
    },[id])

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'metascore') {
          value = parseInt(value);
        }
    
        setEx({
          ...ex,
          [ev.target.name]: value
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        // make a PUT request to edit the item
        axios
          .put(`http://localhost:5000/api/fitness/${id}`, ex)
          .then((res) => {
            // res.data
console.log("this is props.addSaveItem",props.addSavedItem)
console.log("this is setExieList",props.setExerciseList)
            props.setExerciseList(res.data);
            push(`/exercise-list/${id}`);
          })
          .catch((err) => console.log(err));
      };
    
return(
    <div>Update of the exie
 <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="ExerciseTitle"
        value={ex.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="director"
          value={ex.director}
        />
        <div className="baseline" />

        <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          placeholder="director"
          value={ex.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={ex.stars}
        />
        <div className="baseline" />
        <button
        className="md-button"
        onClick={() => push(`/update-exercise/${ex.id}`)}
      >
        Edit
      </button>
        
      </form>



    </div>
)
}
export default UpdateExercise;