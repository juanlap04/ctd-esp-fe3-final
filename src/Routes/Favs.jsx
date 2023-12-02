import React, { useContext } from 'react';
import { AppContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Favs = () => {
  const { state } = useContext(AppContext);

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={themeClass}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((favorite) => (
            <Card
              key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              username={favorite.username}
            />
          ))
        ) : (
          <p>No hay dentistas destacados</p>
        )}
      </div>
    </div>
  );
};

export default Favs;


