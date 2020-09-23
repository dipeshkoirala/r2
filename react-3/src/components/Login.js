// import React, { Component } from "react";
// import axios from "axios";

// export class Login extends Component {
//   state = {
    
//         name:"",
//       username: "",
//       password: "",
//       role:"",

//     arr:[]
//   };
//   handleChange = (e) => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };
//   login = (e) => {
//     e.preventDefault();
    
//     axios
//     // .get(`https://anytime-fitness-database.herokuapp.com/api/fitness/login`)
//     .post('https://anytime-fitness-database.herokuapp.com/api/fitness/register', this.state.arr)
//       .then((res) => {
//         console.log(res);
//        // localStorage.setItem("token", res.data.payload);
        
//         // this.props.history.push("/fitness");
//       })
//       .catch((err) => console.log({ err }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>This is Login page</h1>
//         <div>
//           <form onSubmit=     
//               {this.login}>
             
            
//             <input
//               type="text"
//               name="username"
//               value={this.state.credentials.username}
//               onChange={this.handleChange}
//             />
//             <input
//               type="password"
//               name="password"
//               value={this.state.credentials.password}
//               onChange={this.handleChange}
//             />
//             <select id='role' name='role' onChange={this.handleChange} value={this.state.credentials.role}>
//         <option value='client'>Client</option>
//         <option value='instructor'>Instructor</option>
//                     </select>
//             <button>Log in</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
