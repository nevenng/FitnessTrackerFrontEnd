import React from 'react';
import { BASE_URL } from '../../api';
import { useState } from "react";


const AddActivityToRoutines = ({ id, token }) => {
  const [activityId, setActivityId] = useState([]);
  const [count, setCount] = useState([]);
  const [duration, setDuration] = useState([]);
  const [display, setDisplay] = useState("none");
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const [button, setButton] = useState(null);

  const AddingActivity = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/routines/${id}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: editName,
          description: editDescription,
          activityId: activityId,
          count: count,
          duration: duration
        })
      });
      const result = await response.json();
      console.log(result);
      console.log("id:", id);
      return result
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <div style={{ display: display }}>
        <div>
    
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            required
            label="Name"
            value={editName}
            onChange={event => setEditName(event.target.value)}
          /> 
        </div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          required
          label="Description"
          value={editDescription}
          onChange={event => setEditDescription(event.target.value)}
        /> 
        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="number"
            required
            label="duration"

            value={setDuration}
            onChange={event => setDuration(event.target.value)}
          /> 
        </div>
        <div>
          <label htmlFor="count">Count:</label>
          <input
            type="number"
            required
            label="count"
            value={setCount}
            onChange={event => setCount(event.target.value)}
          /> 
        </div>


        <button onClick={AddingActivity}>Submit</button>
      </div>

      <button
        className="AddActivityButton"
        onClick={() => {
          display === "none" ? setDisplay("block") : setDisplay("none");
        }}>
        {display === "none" ? "AddActivity" : "Cancel"}
      </button>
    </>
  );
}

export default AddActivityToRoutines;