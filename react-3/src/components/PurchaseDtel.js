import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {PurchaseDtelRow} from './PurchaseDtelRow'

export class PurchaseDtel extends Component{

    getLinkClasses=()=>`btn btn-primary m-1
    ${this.props.p_pkt===0? "disabled":""}`
render(){
    return <div className='m-3'>
    <h2 className ="text-center">You purchased::</h2>
    
    <table>
<thead>
        <tr>
            <th>Package</th>
            <th>No of People</th>
            <th className="text-right">Price</th>
            <th className="text-right">SubTotal</th>
        </tr>
        </thead>
        <tbody>

            <PurchaseDtelRow purchase={this.props.purchase}
            p_price={this.props.p_price}
            updateQty={this.props.updatePurchase}
            removePurchase={this.props.removePurchase}/>
        </tbody>
        </table>
        <div>
            <Link className='btn btn-secondary m-1' to ='/fitness'>
                Continue Your selection
            </Link>
            <Link className={this.getLinkClasses()} to ='/fitness/checkout'>
                Checkout
            </Link>
        </div>
    
    
    
    </div>
}



}