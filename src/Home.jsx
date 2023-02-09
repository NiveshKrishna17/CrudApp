import React from 'react';
import Create from './Components/Create';
import Delete from './Components/Delete';
import Read from './Components/Read';
import Update from './Components/Update';

const Home = () => {
    return (
        <div>
            <Create />
            <hr/>
            <Read />
            <hr/>
            <Update />
            <hr />
            <Delete />
            <hr />
        </div>
    )
}

export default Home;