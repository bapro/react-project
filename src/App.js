import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";
import { FavoritesContextProvider } from './store/favorites-context';
import Users from "./admin/Users";
import AddUser from "./admin/AddUser";
import EditUser from "./admin/EditUser";
import ReactHooks from "./reacthooks/ReactHooks";
import SearchBox from "./components/search-box/search-box.component";
/* practice */

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";


/*contact*/

import ContactIndex from "./pages/contacts/ContactIndex";
import ContactList from "./pages/contacts/ContactList";
import ContactCard from "./pages/contacts/ContactCard";
import AddContact from "./pages/contacts/AddContact";
import GetUserByHoc from "./pages/contacts/GetUserByHoc";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/";



function App() {
	
  return (
    <div className="App">
	 <FavoritesContextProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/practice" element={<AllMeetupsPage />} />
          <Route path="/practice-add" element={<NewMeetupPage />} />
		   <Route path="/my-favorites" element={<FavoritesPage />} />
		   
		 <Route path="/my-contacts" element={<ContactIndex />} />
		 <Route path="/add-contact" element={<ContactCard />} />
		  <Route path="/add-contact" element={<AddContact />} />
		
		  <Route path="/react-hooks" element={<ReactHooks />} />
		  <Route path="/search-box" element={<SearchBox />} />
        </Routes>
      </Router>
	  </FavoritesContextProvider>
    </div>
  );
}

export default App;
/*
if we have to pass some props in a componer
<Route path="/practice" render={ (props)=> {
<AllMeetupsPage
{...props} 
contac{contacts}
/>
}} 
/>*/