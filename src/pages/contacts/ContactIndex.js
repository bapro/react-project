import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';


import AddContact from "./AddContact";
import ContactList from "./ContactList";

import api from "../../api/contacts";

function ContactIndex() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  
    const [searchContact, setSearchContact] = useState("");
	const [searchResult, setSearchResult]=useState([]);
	
  const retreiveContacts = async () => {
	  const response = await api.get("/contacts");
	  return response.data;
  };


const searchHandler =(getInput) => {

setSearchContact(getInput);	

if(searchContact !==""){
const newContactList = contacts.filter((contact)=>{
	return
})	
}
};




  const addContactHandler = async (contact) => {
    console.log(contact);
    //setContacts([...contacts, { id: uuid(), ...contact }]);
	const store = {
		id: uuid(),
		 ...contact,
	};
	const response = await api.post("/contacts", store);
     setContacts([...contacts, response.data]);  	
  };


const updateContact = async (contact) => {
	const response = await api.put(`/contacts/$contact.id`, contact);
	const {id, name, email } = response.data;
	setContacts(
	contacts.map((contact) => {
		return contact.id === id ? {...response.data}: contact;
	})
);
};


  const removeContactHandler = async (id) => {
	  await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


  useEffect(() => {
    /*const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);*/
	
	const getAllContacts = async () => {
		const allContacts = await retreiveContacts();
		if(allContacts){
			setContacts(allContacts);
		}
	};
	getAllContacts();
  }, []);

  useEffect(() => {
   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);



  return (
    <div className="ui container">
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} 
	  searchContact={searchContact}
	  searchKeyWord={searchHandler}
	  getContactId={removeContactHandler} />
    </div>
  );
}

export default ContactIndex;


