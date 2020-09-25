import React from 'react';
// import '../App.css';
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <>

        <div>
            <h1>Choose Your Favorite Workout!</h1>
           <Cards />
           <Link to='/clientsignup'>
                <button>Client Sign-Up</button>
           </Link>
           <Link to='/instructorsignup'>
                <button>Instructor Sign-Up</button>
           </Link>
        </div>
        </>
    );
}

export default Home;