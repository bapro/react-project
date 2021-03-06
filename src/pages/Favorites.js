
import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetUpList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
	let content;
	 if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
  
  
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1>My Favorites</h1>
            </div>
            <div className="card-body">
            {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  

  );	
}

export default FavoritesPage;
