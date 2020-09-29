import React from 'react';
import {useHistory} from 'react-router-dom'

const Client = props => {
  const {push}=useHistory();
  const { id, name,type,intensity,max_clients,day, start_time, duration, location } = props.client;

/* 

id	image_url	name	type	intensity	max_clients	day	start_time	duration	location	instructor_id
1		Zumba	Aerobic	4	5	Wednesday	12:00	2 hours	San Pedro	1
2		Yoga	Aerobic	2	5	Wednesday	12:00	2 hours	San Pedro	2
3		Meditation	Aerobic	1	5	Wednesday	12:00	2 hours	San Pedro	2
4		Boxing	Aerobic	4	5	Wednesday	12:00	2 hours	San Pedro	2

*/
return  /* this.props.exercise.map((ex,index) => */ (

  <div className="card m-1 p-2 bg-dark text-white" >
    <h3>
      {name}
      <hr></hr>
      <hr></hr>
      {console.log(name)}


       
       {/* <img className="person" src={url}  height="230px" width="280px"  alt=""/> */}
            
          
      
      <span className="badge badge-pill badge-danger float-right">
        Intensity: {intensity}
      </span>
      <br></br>
      <span className="badge badge-pill badge-primary float-right">
        Maximum Clients are: {max_clients}
      </span>
      
    
    <span className="badge badge-pill badge-secondary p-2 float-left">{type}</span>
   
    </h3>
    <hr></hr>
    <h4>
    
    <span className="badge badge-pill badge-danger float-right">
        Day: {day}
      </span>
      <br></br>
      <span className="badge badge-pill badge-primary float-right">
       Start are: {start_time}
      </span>
      
    
    <span className="badge badge-pill badge-secondary p-2 float-left">{duration}</span>
    <span className="badge badge-pill badge-primary float-right">
       Location: {location}
      </span>
    </h4>
    <button className="md-button bg-secondary m-2 p-2"
        onClick={() => props.push(`/update-exercise/${id}`)}>
        Update</button>
  </div>
  /* <Link key={index} to ={`/exercise/${index+1}`}> */
  // </Link>

)}

export default Client;

/* 



           <img className="person" src={url}  height="230px" width="280px"  alt=""/>
                
              
          
          <span className="badge badge-pill badge-danger float-right">
            Intensity: {intensity}
          </span>
          <br></br>
          <span className="badge badge-pill badge-primary float-right">
            Maximum Clients are: {max_clients}
          </span>
          
        
        <span className="badge badge-pill badge-secondary p-2 float-left">{type}</span>
        </h3>
        <button className='btn btn-danger  float-center'
          onClick={()=>this.props.addPurchase(ex)}>Purchase</button>
        
      </div>
      <hr></hr>
       
       <button className="md-button bg-secondary m-2 p-2"
        onClick={() => props.push(`/update-exercise/${id}`)}>
        Update</button>
*/