import { createStore } from "redux";
import { ExerciseReducer } from "./ExerciseReducer";

export const ExerciseDataStore = createStore(ExerciseReducer);
