import React from 'react';
import Create from './Components/Create';
import Read from './Components/Read';

const Home = () => {
    return (
        <div>
            <Create />
            <hr/>
            <Read />
            <hr/>
        </div>
    )
}

export default Home;