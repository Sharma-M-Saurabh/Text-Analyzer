import React, { useState } from "react";
import "./validation.css";

const Validation = (props) => {
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');


  const AllField = (Email !== "") && (password !== "")
  return (
    <>
      <div className="FormInput">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={props.placeholder}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder={props.pass}
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button disabled={!AllField} type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        
      </div>
    </>
  );
};

export default Validation;
