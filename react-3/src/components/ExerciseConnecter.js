import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addPurchase,updatePurchase,removePurchase,clearPurchase } from "../dataF/ActionCreaters"
import { loadData } from "../dataF/ActionCreaters"
import { DataTypes } from "../dataF/Types";
import { Exercise } from "./Exercise";


import {PurchaseDtel} from './PurchaseDtel'

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData ,addPurchase,updatePurchase,removePurchase,clearPurchase 
};

const filterExercise= (exercises = [], type) =>
  !type || type === "All"
    ? exercises
    : exercises.filter(
        (ex) => ex.type.toLowerCase() === type.toLowerCase()
      );

export const ExerciseConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    
    render() {
      return <Switch>
          <Route
            path="/fitness/exercise/:type?"
            render={(routeProps) => 
              <Exercise {...this.props} {...routeProps}
                exercise={filterExercise(this.props.exercise,
                  routeProps.match.params.type)} 
                  />} />

          <Redirect to="/fitness/exercise" />

          {/* ---------------------- */}
<Route path='/fitness/exercise/cart' render={(routeProps)=>
<PurchaseDtel {...this.props}{...routeProps}/>}/>
{/* ---------------------- */}

        </Switch>
      
    }
    
    componentDidMount() {
      console.log(this.props)
      this.props.loadData(DataTypes.TYPES);
      this.props.loadData(DataTypes.EXERCISE);
    }
  }
);
