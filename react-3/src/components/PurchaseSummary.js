import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export class PurchaseSummary extends Component{

    getSummary=()=>{
        if(this.props.purchasePkts>0){
        return <span>{this.props.p_pkt} item(s), 
        ${this.props.p_price.toFixed(2)}</span>
        }else{
            return <span>$0.00</span>
        }
    }
    getLinkClasses=()=>{
        return `btn btn-sm bg-dark text-white ${this.props.p_pkt===0 ? 'disabled':''}`
    }
    render(){
        return <div className="float-right">
        <small>
        {this.getSummary()}
        <Link className={this.getLinkClasses()}
        to='/fitness/exercise/purchase'>
            <i className="fa fa-shopping-cart"></i>
        </Link>
        </small>
        </div>
    }
}