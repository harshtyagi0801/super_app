import React from 'react';
import chipstyle from './chip.module.css';
import { RxCross2 } from 'react-icons/rx';
import { AiFillWarning } from 'react-icons/ai';

function Chip({ selectedCard, listError, setSelectedCard }) {
    const removeCard = (index) => {
        const updatedSelectedCard = [...selectedCard];
        updatedSelectedCard.splice(index, 1);
        setSelectedCard(updatedSelectedCard);
    };

    return (
        <div className={chipstyle.container}>
            <h1>Super app</h1>
            <label>Choose your <br /> entertainment <br /> category</label>
            <ul style={{ color: 'white', listStyle: 'none' }}>
                {selectedCard.map((card, index) => (
                    <li key={index}>
                        {card}
                        <RxCross2 className={chipstyle.icon} onClick={() => removeCard(index)} />
                    </li>
                ))}
            </ul>
            {listError ? (<p><AiFillWarning className={chipstyle.warn} />Minimum 3 categories required</p>) : (<></>)}
        </div>
    );
}

export default Chip;
