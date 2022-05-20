import React from 'react';

const ButtonRandomize = ({ isActive, clicked }) => {
    return (
        <button className='btn btn-dark m-4 p-3' onClick={clicked}>{isActive ? 'Get another user' : 'Get user'}</button>
    )
}

export default ButtonRandomize;