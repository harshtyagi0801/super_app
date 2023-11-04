import React  from 'react';
import List from '../component/movies/List';
import profile from '/Users/harshtyagi/Desktop/cuvette/super-app/src/assest/profile/profile.png';
import styles from '../component/movies/list.module.css';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const selectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];
 
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'black',
        overflowX: 'hidden',
        maxHeight: '100vh',
      }}
    >
      <img
        src={profile}
        style={{
          position: 'absolute',
          top: '2vh',
          right: '3vw',
          height: '60px',
          width: '60px',
        }}
        alt="Profile"
        onClick={() => navigate('/Browse')}
      />
      <p
        style={{
          color: 'green',
          fontSize: '3rem',
          margin: '1vw',
        }}
        className={styles.header}
      >
        Super app
      </p>
      <p style={{ color: 'white', fontSize: '2rem', margin: '2vw' }}>
        Entertainment according to your choice
      </p>
      {selectedCards.map((genre, index) => (
        <List key={index} selectedCards={genre} />
      ))}
    </div>
  );
};

export default Movies;
