import React, { Component } from 'react';
import {AxiosCall} from './AxiosCall';

export default class Login extends Component {
    
        state = {


            
            username: "",
            password: "",
            role:"",
            
            
            
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    

    handleChange=(e)=> {
        e.preventDefault();
      this.setState({
        //  ...this.state, 
         [e.target.name]: e.target.value,
      
    });
    }

    handleSubmit=(e)=> {
        e.preventDefault();
       

        AxiosCall()
        .post("/login",this.state   /* , {withCredentials: true }  */   )
        .then(res => {
            console.log(res)
            console.log("dk-check the response:", res);
            
            localStorage.setItem("token",res.data.token)
            // console.log(token)
            this.props.history.push('/fitness')
                     
        })
        .catch(error => {
            console.log("Login error", {error});
        });
        // console.log("form submitted");
        // event.preventDefault();
    }
    render(){
        return (<div className="login-container">
            <form onSubmit={this.handleSubmit}>
                <input className="login" type="text"
                 name="username" 
                 placeholder="username" 
                 value={this.state.username}
                  onChange={this.handleChange} /* required  */
                  />

                 <input className="login" type="password"
                 name="password" 
                 placeholder="password" 
                 value={this.state.password}
                  onChange={this.handleChange}
                //    required 
                  /> 
                  <label htmlFor='role'>Role:
                  <select id='role' name='role' onChange={this.handleChange} value={this.state.role}>
                        <option>Select your role</option>
                        <option value='client'>Client</option>
                        <option value='instructor'>Instructor</option>
                    </select>  
                    </label>           
                  <button className="login-btn" >Login</button>
            </form>
            </div>);
    }
}