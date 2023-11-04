import React, { useState } from 'react';
import cardstyle from './card.module.css';
import Action from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/action.png';
import Drama from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/drama.png';
import Fantasy from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/fantasy.png';
import Fiction from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/fiction.png';
import Horror from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/horror.png';
import Music from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/music.png';
import Romance from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/romance.png';
import Thriller from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/thriller.png';
import Western from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/cardimage/western.png';
import Chip from './Chip';
import { useNavigate } from 'react-router-dom';

function Cards() {
    const [selectedCards, setSelectedCards] = useState([]);
    const [listError, setListError] = useState(false);

    const cardData = [
        { label: 'Action', backgroundColor: '#FF5209', image: Action },
        { label: 'Drama', backgroundColor: '#D7A4FF', image: Drama },
        { label: 'Romance', backgroundColor: '#148A08', image: Romance },
        { label: 'Thriller', backgroundColor: '#84C2FF', image: Thriller },
        { label: 'Western', backgroundColor: '#902500', image: Western },
        { label: 'Horror', backgroundColor: '#7358FF', image: Horror },
        { label: 'Fantasy', backgroundColor: '#FF4ADE', image: Fantasy },
        { label: 'Music', backgroundColor: '#E61E32', image: Music },
        { label: 'Fiction', backgroundColor: '#6CD061', image: Fiction },
    ];

    const navigate = useNavigate();

    const handleCardClick = (label) => {
        if (selectedCards.includes(label)) {
            setSelectedCards(selectedCards.filter((card) => card !== label));
        } else {
            setSelectedCards([...selectedCards, label]);
        }
       
       
    };

    const handleNextPage = () => {
        if (selectedCards.length < 3) {
            setListError(true);
        } else {
            setListError(false);
            localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
            navigate('/Browse');
        }
    };

    return (
        <>
            <Chip selectedCard={selectedCards} listError={listError} setSelectedCard={setSelectedCards} />
            <div className={cardstyle.cardss}>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`${cardstyle.card} ${selectedCards.includes(card.label) ? cardstyle.selectedCard : ''
                            }`}
                        style={{
                            backgroundColor: card.backgroundColor,
                            border: selectedCards.includes(card.label) ? '6px solid #11B800' : 'none'
                        }}
                        onClick={() => handleCardClick(card.label)}
                    >
                        <label>{card.label}</label>
                        <br />
                        <img src={card.image} alt={`${card.label} Card`} />
                    </div>
                ))}
                 <button className={cardstyle.btn} onClick={handleNextPage}>Next Page </button>
            </div>
           
        </>
    );
}

export default Cards;
