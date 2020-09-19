import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export class PurchaseSummary extends Component{

    getSummary=()=>{
        if(this.props.purchasePkts>0){
        return <span>{this.props.purchasePkts} item(s), 
        ${this.props.purchasePrice.toFixed(2)}</span>
        }else{
            return <span>No Purchase:(empty)</span>
        }
    }
    getLinkClasses=()=>{
        return `btn btn-sm bg-dark text-white ${this.props.purchasePkts===0 ? 'disabled':''}`
    }
    render(){
        return <div className="float-right">
        <small>
        {this.getSummary()}
        <Link className={this.getLinkClasses()}
        to='/fitness/exercise'>
            <i className="fa fa-shopping-cart"></i>
        </Link>
        </small>
        </div>
    }
}