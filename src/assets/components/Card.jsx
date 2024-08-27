import React from 'react';

const Card = ({ name, email, id }) => {
    return(
        <>
            <div className='bg-green-200 inline-block rounded-lg p-3 m-2 transform 
                transition duration-300 ease-in-out hover:scale-105 border-2 shadow-xl'
            >
                <img alt = 'robots' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </>       
    )
}

export default Card;