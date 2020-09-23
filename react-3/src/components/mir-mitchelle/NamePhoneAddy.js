import React from 'react';


const NamePhoneEmail = () => {
return(
    <form>
        <label htmlFor='first-name'><h3>First Name:</h3></label>
                    <input 
                        id='first-name'
                        type='text'
                        name='firstName'
                        onChange={}
                        value={}
                    />
                    <label htmlFor='last-name'><h3>Last Name:</h3></label>
                    <input 
                        id='last-name'
                        type='text'
                        name='lastName'
                        onChange={}
                        value={}
                    />
                    <label htmlFor='phone-number'><h3>Phone Number:</h3></label>
                    <input 
                        id='phone-number'
                        type='tel'
                        name='phoneNumber'
                        onChange={}
                        value={}
                    />
                    <div class='radioButtons'>
                        <label htmlFor='mobile'>Mobile</label>
                        <input 
                            id='mobile'
                            type='radio'
                            name='mobile'
                            onChange={}
                            value={}
                        />
                        <label htmlFor='home'>Home</label>
                        <input 
                            id='home'
                            type='radio'
                            name='home'
                            onChange={}
                            value={}
                        />
                        <label htmlFor='business'>Business</label>
                        <input 
                            id='business'
                            type='radio'
                            name='business'
                            onChange={}
                            value={}
                        />
                    </div>
                    <label htmlFor='email'>Email:</label>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        onChange={}
                        value={}
                    />
    </form>
)}

export default NamePhoneEmail;