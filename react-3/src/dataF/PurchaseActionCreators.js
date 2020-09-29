import { ActionTypes } from "./Types";


export const addPurchase=(pkt,people)=>({
  type:ActionTypes.EXERCISE_ADD,
  payload:{
    pkt,
    price,
    people:people||1
  }
})

export const updatePurchase=(pkt,people)=>({
  type:ActionTypes.EXERCISE_UPDATE,
  payload:{
    pkt,
    price,
    people:people
  }
})

export const removePurchase=(pkt)=>({
  type:ActionTypes.EXERCISE_REMOVE,
  payload:{
    pkt,
    
  }
})

export const clearPurchase=()=>({
  type:ActionTypes.EXERCISE_CLEAR,
  
})

// export const addPurchase=(pkt,price,people)=>({
//     type:ActionTypes.EXERCISE_ADD,
//     payload:{
//       pkt,
//       price,
//       people:people||1
//     }
//   })
  
//   export const updatePurchase=(pkt,price,people)=>({
//     type:ActionTypes.EXERCISE_UPDATE,
//     payload:{
//       pkt,
//       price,
//       people:people
//     }
//   })
  
//   export const removePurchase=(pkt)=>({
//     type:ActionTypes.EXERCISE_REMOVE,
//     payload:{
//       pkt,
      
//     }
//   })
  
//   export const clearPurchase=(pkt)=>({
//     type:ActionTypes.EXERCISE_CLEAR,
    
//   })