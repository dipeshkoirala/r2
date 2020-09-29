import { createStore } from "redux";
import { ExerciseReducer } from "./ExerciseReducer";
import {PurchaseReducer} from './PurchaseReducer';
import {CReducer} from './CReducer'

export const ExerciseDataStore 
= createStore(CReducer(ExerciseReducer,PurchaseReducer));
