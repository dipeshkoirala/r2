import React, { Component } from 'react';
import {AxiosCall} from './AxiosCall';

export default class Login extends Component {
    
        state = {


            
            username: "",
            password: "",
            role:"",
            
            
            
        }

      
    

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
            this.props.history.push('/protected')
            
                     
        })
        .catch(error => {
            console.log("Login error", {error});
        });
        
    }
    render(){
        return (
        
         <div className="login-container bg-dark col-10 p-5 float-center p-2 ">
            <form onSubmit={this.handleSubmit}>
                <input className="login p-2 m-3" type="text"
                 name="username" 
                 placeholder="username" 
                 value={this.state.username}
                  onChange={this.handleChange} /* required  */
                  />

                 <input className="login p-2 m-3" type="password"
                 name="password" 
                 placeholder="password" 
                 value={this.state.password}
                  onChange={this.handleChange}
                //    required 
                  /> 
                  <label htmlFor='role'>Role:
                  <select id='role' name='role' className='login p-2 m-2' onChange={this.handleChange} value={this.state.role}>
                        <option>Select your role</option>
                        <option value='client'>Client</option>
                        <option value='instructor'>Instructor</option>
                    </select>  
                    </label>           
                  <button className="login-btn btn-success p-2 m-3" >Login</button>
            </form>
            </div>);
    }
}