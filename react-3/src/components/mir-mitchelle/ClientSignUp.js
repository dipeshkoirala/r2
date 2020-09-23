import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';




const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const StyledForm = styled.form`
    width: 50%;
    margin: 0 auto;
`

const StyledInput = styled.input`
    margin: 5px 0;
`

const StyledLabel = styled.label`
    display: block;
`





const UserSignUp = () => {

    const initialState = {
        name: "",
        username: "",
        password: "",
        role: "",
    }

    const [user, setUser] = useState(initialState)
    // const [error, setErrors] = useState(initialState)
    const [post, setPost] = useState([])

    const handleChanges = (event) => {
        const newFormData = {
            ...user, 
            [event.target.name] : event.target.value
        }
        setUser(newFormData);
    }

    function submitForm (event) {
        event.preventDefault()
        console.log(user)
        
        axios
        .post('https://anytime-fitness-database.herokuapp.com/api/fitness/register', user)
        .then(response => {
            setPost(response.data);
            setUser(initialState)
        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <WrapperDiv>
            <h1>User Sign-up Form</h1>
            <StyledForm onSubmit= {submitForm}>
            <StyledLabel htmlFor='name'>Name: 
                    <StyledInput 
                        id='name'
                        type='text'
                        name='name'
                        onChange={handleChanges}
                        value={user.name}
                    />
                    </StyledLabel>
                    
                    <StyledLabel htmlFor='username'>Username: 
                    <StyledInput 
                        id='username'
                        type='username'
                        name='username'
                        onChange={handleChanges}
                        value={user.username}
                    />
                    </StyledLabel>

                    <StyledLabel htmlFor='password'>Password
                        <StyledInput 
                            id='password'
                            type='password'
                            name='password'
                            onChange={handleChanges}
                            value={user.password}
                        />
                    </StyledLabel>

                    <StyledLabel htmlFor='role'>Role:
                    <select id='role' name='role' onChange={handleChanges} value={user.role}>
                        <option>Select your role</option>
                        <option value='client'>Client</option>
                        <option value='instructor'>Instructor</option>
                    </select>
                    </StyledLabel>

                {/* <h1>Billing Information</h1>
                <StyledLabel htmlFor='street-address'>Street Address: 
                <StyledInput 
                    id='street-address'
                    type='text'
                    name='address'
                    value={client.address}
                /><br />
                </StyledLabel>
                <StyledLabel htmlFor='city'>City: 
                <StyledInput 
                    id='city'
                    type='text'
                    name='city'
                    value={client.city}
                />
                </StyledLabel>
                <label htmlFor='state'>State: </label>
                <select id='state' name='state'>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select><br />
                <div id='termsAndConditions'>
                    <StyledLabel htmlFor='terms-and-conditions'><p>Yes, I Accept the terms and conditions</p>
                    <input 
                        id='terms-and-conditions'
                        type='checkbox'
                        name='tAndC'
                        checked={client.tAndC}
                    />
                    </StyledLabel> */}
                    
                {/* </div> */}
                <pre>{JSON.stringify(post, null, 2)}</pre>
                <button type='submit'>Sign Up</button>
            </StyledForm>
        </WrapperDiv>
    )
                        
}

export default UserSignUp;