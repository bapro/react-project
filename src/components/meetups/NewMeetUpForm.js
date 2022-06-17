import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function NewMeetUphtmlForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  function submitHandler(event) {
    event.preventDefault();
    const meetupData = {
		id:uuidv4(),
	  title: userInput.title,
      image: userInput.image,
      address: userInput.address,
      description: userInput.description,
    };

    props.onAddMeetup(meetupData);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group mb-3">
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            className="form-control"
            onChange={handleInput}
            value={userInput.title}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            className="form-control"
            onChange={handleInput}
            value={userInput.image}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            className="form-control"
            onChange={handleInput}
            value={userInput.address}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            className="form-control"
            onChange={handleInput}
            value={userInput.description}
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <button className="btn btn-primary">Add Meetup</button>
        </div>
      </form>
    </div>
  );
}

export default NewMeetUphtmlForm;
