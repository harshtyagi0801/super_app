import React, { useEffect, useState } from 'react';
import fecthstyle from './profile.module.css';
import profile from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/profile/profile.png';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
  
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
      setName(storedUserData.name);
      setEmail(storedUserData.mail);
      setUsername(storedUserData.uName);
    }

   
    const storedSelectedCards = JSON.parse(localStorage.getItem('selectedCards'));

    if (storedSelectedCards) {
      setSelectedCards(storedSelectedCards);
    }
  }, []);

  return (
    <div className={fecthstyle.container}>
      <div className={fecthstyle.image}>
        <img src={profile} alt='profile.png' />
      </div>
      <div className={fecthstyle.data}>
        <h1 style={{marginBottom:'7px'}}>{name}</h1>
        <p style={{fontSize:'18px',marginBottom:'7px'}}>{email}</p>
        <p style={{fontSize:'20px',marginBottom:'10px'}}>{username}</p>
        <section>
          
          <ul className={fecthstyle.map}>
            {selectedCards.map((card, index) => (
              <li key={index} style={{listStyle:"none"}}>{card}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Profile;
