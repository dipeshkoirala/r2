import React, { Component } from "react";

export class ExerciseList extends Component {
  render() {
    if (this.props.exercise == null || this.props.exercise.length === 0) {
      return <h5 className="p-2">No exercise Available</h5>;
    }
   else return  this.props.exercise.map((ex,index) => (
      <div className="card m-1 p-2 bg-info text-white" key={index}>
        <h3>
          {ex.name}
          <hr></hr>
          <hr></hr>
          {console.log(ex.url)}


           
           <img className="person" src={ex.url}  height="230px" width="280px"  alt=""/>
                
              
          
          <span className="badge badge-pill badge-danger float-right">
            Intensity: {ex.intensity}
          </span>
          <br></br>
          <span className="badge badge-pill badge-primary float-right">
            Maximum Clients are: {ex.max_clients}
          </span>
          
        
        <span className="badge badge-pill badge-secondary p-2 float-left">{ex.type}</span>
        </h3>
        <button className='btn btn-danger  float-center'
          onClick={()=>this.props.addPurchase(ex)}>Purchase</button>
      </div>
    ));
  }
}
