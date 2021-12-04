import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';
import './Cards.css'

function Cards() {

    const [people, setPeople] = useState([
        {
            name: 'Tharun Birla',
            url: 'https://i.scdn.co/image/ab67616d00001e02124bcdfd29fce6a568eb85ea',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc'
        },
        {
            name: 'Mitra',
            url: 'https://i.ytimg.com/vi/3LyrY1-Xp8w/maxresdefault.jpg',
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc',
            contact: 'example@gmail.com'
        }
    ]);

    return (
        <div>
            <div className="card_container">
            {people.map(person => (
                <TinderCard
                className="swipe"
                preventSwipe={['up','down']}
                key={person.name}                
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card">
                        <h3>{person.name}</h3>
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