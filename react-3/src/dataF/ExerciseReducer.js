import { ActionTypes } from "./Types";

export const ExerciseReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
      };
    default:
      return storeData || {};
  }
};

export const PurchaseReducer=(storeData,action)=>{

  let newStore={purchase:[],purchasePkts:0,purchasePrice:0, ...storeData}

  switch(action.type){
    case ActionTypes.EXERCISE_ADD:
      const pkt=action.payload.pkt
      const p=action.payload.price
      const q=action.payload.quantity

      let existing= newStore.purchase.find(pk=>pk.pkt.id===p.id)
      if(existing){
        existing.quantity+=q;
      }else{
        newStore.purchase=[...newStore.purchase,action.payload]
      }
      newStore.purchasePkts+=q;
      newStore.purchasePrice+=80*q;
      return newStore;

      case ActionTypes.EXERCISE_UPDATE:
        newStore.purchase=newStore.purchase.map(pk=>{
          if(pk.pkt.id===action.payload.pkt.id){
            const diff=action.payload.quantity-pk.quantity
            newStore.purchasePkts+=diff;
            newStore.purchasePrice+=(pk.pkt.price*diff)
            return action.payload
          }else{
            return pk;
          }
        })
        return newStore;

        
case ActionTypes.EXERCISE_REMOVE:
  let selection=newStore.purchase.find(pk=>pk.pkt.id===action.payload.id)
  newStore.purchasePkts-=selection.quantity
  newStore.purchasePrice-=selection.quantity*selection.pkt.price
  newStore.purchase=newStore.purchase.filter(pk=>pk !== selection)
  return newStore

  case ActionTypes.EXERCISE_CLEAR:
    return {...storeData, purchase:[], purchasePkts:0,purchasePrice:0}

    default:
      return storeData ||{};
  }
}

export const CommonReducer=(...reducers)=>(storeData,action)=>{
  for (let i=0;i<reducers.length;i++){
  let newStore=reducers[i](storeData,action)
  if(newStore!==storeData){
    return newStore;
  }
}
return storeData;
}