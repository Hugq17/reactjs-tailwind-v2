import React from 'react';
import Pic from '../assets/pictures/pikachu.jpg'

function Columns() {
    return (
        <>
            <div className='columns-5 hover:columns-3'>
                <img src={require('../assets/pictures/avatar.jpg')} />
                <img src={require('../assets/pictures/avatar.jpg')} />
                <img src={require('../assets/pictures/avatar.jpg')} />
                <img src={require('../assets/pictures/pikachu.jpg')} />
                <img src={require('../assets/pictures/pikachu.jpg')} />
            </div>
        </>
    );
}
export default Columns;