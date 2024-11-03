import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

const HogTile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Card onClick={() => setShowDetails(!showDetails)}>
            <img src={hog.image} alt={hog.name} />
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
                {showDetails && (
                    <Card.Description>
                        <p>Specialty: {hog.specialty}</p>
                        <p>Weight: {hog.weight}</p>
                        <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
                        <p>Highest Medal: {hog.highestMedal}</p>
                    </Card.Description>
                )}
            </Card.Content>
        </Card>
    );
};

export default HogTile;