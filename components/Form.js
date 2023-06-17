import "./FormStyles.css";

import React from 'react'

const form = () => {
  return (
    <div>
      <div className="form">
        <form>
          <label>Your Name</label>
          <input type="text"></input>
          <label>Email Id </label>
          <input type="email"></input>
          <label>Subject</label>
          <input type="text"></input>
          <label>Message</label>
          <textarea rows="6" placeholder="Type Your Message Here"></textarea>
          <button className="btn">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default form
