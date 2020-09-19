import React, { Component } from "react";
import { PurchaseReducer } from "../dataF/ExerciseReducer";
import { CategoryNav } from "./CategoryNav";
import { ExerciseList } from "./ExerciseList";
import {PurchaseSummary} from './PurchaseSummary'
export class Exercise extends Component {
  render() {
    return (
      <div className="ct-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand m-2">Exercise to Pick From</div>
            <PurchaseSummary {...this.props}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3 p-2">
            <CategoryNav
              baseUrl="/fitness/exercise"
              types={this.props.types}
            />
          </div>
          <div className="col-9 p-2">
            <ExerciseList exercise={this.props.exercise} />
          </div>
        </div>
      </div>
    );
  }
}
