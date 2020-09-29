import { ActionTypes } from "./Types";
import { data as phData } from "./Placeholder";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType],
  },
});


export const addPurchase=(product,quantity)=>({
  type:ActionTypes.EXERCISE_ADD,
  payload:{
    product,
   
    auantity:quantity||1
  }
})

export const updatePurchase=(pkt,people)=>({
  type:ActionTypes.EXERCISE_UPDATE,
  payload:{
    pkt,
    
    people:people
  }
})

export const removePurchase=(pkt)=>({
  type:ActionTypes.EXERCISE_REMOVE,
  payload:{
    pkt,
    
  }
})

export const clearPurchase=(pkt)=>({
  type:ActionTypes.EXERCISE_CLEAR,
  
})