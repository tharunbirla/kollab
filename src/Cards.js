import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './Cards.css'

function Cards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return (
        <div>
            <div className="card_container">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        preventSwipe={['up', 'down']}
                        key={person.name}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                            <strong><p className="tags">{person.tags}</p></strong>
                            <p className="description">{person.description}</p>
                            <p className="contact">{person.contact}</p>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards