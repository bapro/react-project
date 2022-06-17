import React, { useState, useRef }  from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
 
//const [getInput, setGetInput] = useState("");

  const titleInputRef = useRef();



const getSearchContact= (e) => {
  props.searchKeyWord(titleInputRef);

}

 const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  
 /* return (
  <div>
  <input type="text"
  ref={titleInputRef}
  placeholder="search"
  
  onChange={getSearchContact}
  />
  </div>
  
  );*/
  return <div className="list-group list-group-flush">{renderContactList}</div>;
};

export default ContactList;