import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import NamePhoneEmail from './NamePhoneEmail';



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





const InstructorSignUp = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        mobile: '',
        home: '',
        business: '',
        email: '',
        address: '',
        city: '',
        state: '',
        cardNumber: '',
        expirationDate: '',
        tAndC: ''
    }

    const [client, setClient] = useState(initialState)
    const [error, setErrors] = useState(initialState)

    const handleChanges = (event) => {
        const newStateObj = {...client, [event.target.name]:
            event.target.type === 'checkbox' ? event.target.checked : event.target.value }
        setClient(newStateObj)
        // console.log(newStateObj);
    }

    // function submitForm (event) {
    //     event.preventDefault()
        
    //     axios
    //     .post('https://reqres.in/api/users', client)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    //     setClient(initialState);
    // }



    return (
        <WrapperDiv>
            <h1>Instructor Sign-up Form</h1>
            <StyledForm onSubmit=''>
            <label htmlFor='first-name'>First Name: </label>
                    <StyledInput 
                        id='first-name'
                        type='text'
                        name='firstName'
                        onChange={handleChanges}
                        // value={}
                    />
                    <label htmlFor='last-name'>Last Name: </label>
                    <StyledInput 
                        id='last-name'
                        type='text'
                        name='lastName'
                        onChange={handleChanges}
                        // value={}
                    />

                    <label htmlFor='phone-number'>Phone Number:</label>
                    <StyledInput 
                        id='phone-number'
                        type='tel'
                        name='phoneNumber'
                        onChange={handleChanges}
                        // value={}
                    />
                    
                        
                        {/* <label htmlFor='mobile'>Mobile </label>
                        <StyledInput 
                            id='mobile'
                            type='radio'
                            name='mobile'
                            onChange={handleChanges}
                            // value={}
                        />
                        <label htmlFor='home'>Home </label>
                        <StyledInput 
                            id='home'
                            type='radio'
                            name='home'
                            onChange={handleChanges}
                            // value={}
                        />
                        <label htmlFor='business'>Business </label>
                        <StyledInput 
                            id='business'
                            type='radio'
                            name='business'
                            onChange={handleChanges}
                            // value={}
                        /> */}

                    <label htmlFor='email'>Email: </label>
                    <StyledInput 
                        id='email'
                        type='email'
                        name='email'
                        onChange={handleChanges}
                        // value={}
                    />
            </StyledForm>
        </WrapperDiv>
    )
}

export default InstructorSignUp;
