
import React,{Component} from 'react'

export class PurchaseDtelRow extends Component{



    handleChange=(pkt,e)=>{
        this.props.updateQty(pkt,e.target.value)
    }



render(){
    if(!this.props.purchase||this.props.purchase.length===0){
        return <tr><td colSpan="5">Your cart is empty</td></tr>
    } else{
        return <>
        {this.props.purchase.map(i=>
            <tr key={i.product.id}>
                <td>
                    <input type="number" value={i.people} onChange={(e)=>
                this.handleChange(i.pkt,e) }/>

                </td>
                <td>{i.pkt.pkt}</td>
                <td>${i.pkt.price.toFixed(2)}</td>
                    <td>${i.people*i.pkt.price.toFixed(2)}</td>
                <td><button className='btn btn-sm btn-danger' 
                onClick={()=>{this.props.removePurchase(i.pkt)}}>Remove</button>
                </td>
            </tr>)}
            <tr>
                <th>Total:</th>
                <th>${this.props.p_price}</th>
            </tr>
        
        
        </>
    }
}
}