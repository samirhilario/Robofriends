import React from 'react';

const SearchBox = () => {
    return(
        <>
            <div className='p-2'>
                <input 
                    className='border-2 p-2 bg-blue-200'
                    type='search' 
                    placeholder='search robots' 
                />
            </div>
        </>
    )
}

export default SearchBox;