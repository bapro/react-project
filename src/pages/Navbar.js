import { Link } from "react-router-dom";
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
function Navbar() {
	const favoritesCtx = useContext(FavoritesContext);
  return (
    <div className="pb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Practice <span className="badge rounded-pill bg-danger">
                        {favoritesCtx.totalFavorites}
                      </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/practice">
                      List
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/practice-add">
                      Add
                    </Link>
                  </li>
				  <hr className="dropdown-divider" />
				   <li>
                    <Link className="dropdown-item" to="/my-favorites">
                      My Favorites
					  
                    </Link>
                  </li>  
                </ul>
              </li>



       <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contacts 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/my-contacts">
                      My Contacts
                    </Link>
                  </li>
				   <hr className="dropdown-divider" />
                    <li>
                    <Link className="dropdown-item" to="/get-users-with-hoc">
                      HOC Exemple
                    </Link>
                  </li>
				   
                </ul>
              </li>







              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-user">
                  Add Student
                </Link>
              </li>
			  
			          <li className="nav-item">
                <Link className="nav-link" to="/react-hooks">
                 React Hooks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
