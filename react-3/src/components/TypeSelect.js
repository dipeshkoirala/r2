import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'

export class TypeSelect extends Component{
    render(){
        return <Route path={this.props.to} exact={this.props.exact}
        children={routeProps=>{
            const baseClass=this.props.className||'m-2 btn btn-block'
            const activeClass=this.props.activeClass||'btn-success'
            const inactiveClass=this.props.inactiveClass||'btn-primary'
            const combinedClass=`${baseClass} ${routeProps.match ? activeClass:inactiveClass}`

            return <Link to={this.props.to} className={combinedClass}>
            {this.props.children}
            </Link>
        }}/>
    }
}