import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        <h2>Signup</h2>
        <p>Already have an account ? Login</p>
        <input type="text" name="name" placeholder="Username"/>
        <br />
        <input type="text" name="Email" placeholder="Email"/>
        <br />
        <input type="text" name="password" placeholder="Password" />
        <br />
        <input type="text" name="password" placeholder="Confirm Password"/>
        <br />
        <input type="text" name="Signup" placeholder="Signup" className="text-center btn btn-danger"/>
      </div>
       <hr />
        <button className='btn btn-primary '>Facebook</button>
        <button className='btn btn-danger'>Google</button>
        <button className='btn btn-info'>Twitter</button>
    </div>
  );
};

export default Signup;
