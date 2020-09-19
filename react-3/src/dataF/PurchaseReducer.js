import {ActionTypes} from './Types'

export const PurchaseReducer=(storeData,action)=>{

    let newStore={purchase:[],purchasePkts:0,purchasePrice:0, ...storeData}
  
    switch(action.type){
      case ActionTypes.EXERCISE_ADD:
        
        return newStore;
  
        case ActionTypes.EXERCISE_UPDATE:
          
          return newStore;
  
          
  case ActionTypes.EXERCISE_REMOVE:
   
    return newStore
  
    case ActionTypes.EXERCISE_CLEAR:
      return {...storeData, purchase:[], purchasePkts:0,purchasePrice:0}
  
      default:
        return storeData ||{};
    }
  }