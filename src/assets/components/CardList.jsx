import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    const cardComponents = robots.map((robot, index) => {
        return <Card 
            key={index} 
            id={robot.id} 
            name={robot.name} 
            email={robot.email} 
        />
    })
    return(
        <>
            <div>
                {/* Render the Card component for each robot in the robots array */}
                { cardComponents }
            </div>
        </>
    )
}

export default CardList;