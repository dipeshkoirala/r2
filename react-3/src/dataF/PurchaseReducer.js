import {ActionTypes} from './Types'
/*
 export const DataTypes = {
  TYPES: "types",
   EXERCISE: "exercise",
 };
 
 export const ActionTypes = {
   DATA_LOAD: "data_load",
 };
  */



export const PurchaseReducer=(storeData,action)=>{

/* 
  let newStore={cart:[],cart_itemt:0,cartPrice:0, ...storeData}
   */
  let newStore={purchase:[],p_pkt:0,p_price:0, ...storeData}

  switch(action.type){
    case ActionTypes.EXERCISE_ADD:
      
      const p=action.payload.product
      const q=action.payload.quantity

      let existing= newStore.purchase.find(pk=>pk.product.id===p.id)
      if(existing){
        existing.people+=q;
      }else{
        newStore.purchase=[...newStore.purchase,action.payload]
      }



      newStore.p_pkt+=q;

      newStore.p_price+=p.price*q;

      return newStore;


      // case ActionTypes.EXERCISE_UPDATE:
      //   newStore.purchase=newStore.purchase.map(pk=>{
      //     if(pk.pkt.id===action.payload.pkt.id){
      //       const diff=action.payload.people-pk.people
      //       newStore.p_pkt+=diff;
      //       newStore.p_price+=(pk.pkt.price*diff)
      //       return action.payload
      //     }else{
      //       return pk;
      //     }
      //   })
      //   return newStore;

        
case ActionTypes.EXERCISE_REMOVE:
  let selection=newStore.purchase.find(pk=>pk.pkt.id===action.payload.id)

  newStore.p_pkt-=selection.people

  newStore.p_price-=selection.people*selection.pkt.price
  newStore.purchase=newStore.purchase.filter(pk=>pk !== selection)
  return newStore

  case ActionTypes.EXERCISE_CLEAR:
    return {...storeData, purchase:[], p_pkt:0,p_price:0}

    default:
      return storeData ||{};
  }
}