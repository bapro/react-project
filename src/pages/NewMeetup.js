import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert2";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetupPage() {
	 const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
     fetch(
      'https://admedicalltest-1554850089006-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate("/practice");
    });
  }
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1>New Meetup Page</h1>
            </div>
            <div className="card-body">
              <NewMeetUpForm onAddMeetup={addMeetupHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMeetupPage;
