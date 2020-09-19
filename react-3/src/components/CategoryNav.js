import React,{Component} from 'react'
//import {Link}  from 'react-router-dom'
import {TypeSelect} from './TypeSelect'
export class CategoryNav extends Component{
    render(){
        return(
            <div>
              <TypeSelect to={this.props.baseUrl} exact={true}>All</TypeSelect>
                {/* <Link className='btn btn-success btn-block' to ={this.props.baseUrl}>
                    All
                </Link> */}
                {this.props.types &&
          this.props.types.map((ct) => (
            <TypeSelect 
            // <Link
            //   className="btn btn-success btn-block"
              key={ct}
              to={`${this.props.baseUrl}/${ct.toLowerCase()}`}
            >
              {ct}
            </TypeSelect>
            // </Link>
          ))}
            </div>
        )
    }
}