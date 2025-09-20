import React from 'react'

const Loginform = () => {
  return (
    <div>
    <div>
        <h2>Login</h2>
        <p>New to Tech-shop ? Create an account</p>
        <input type="text" name='Email'placeholder='Email'/>
        <br />
        <input type="text" name='password' placeholder='Password' /><br />
        <input type="text" name='Login' placeholder='Login' className='text-center btn btn-danger'/>

    </div>
    <div>
        <hr />
        <button className='btn btn-primary'>Facebook</button>
        <button className='btn btn-danger'>Google</button>
        <button className='btn btn-info'>Twitter</button>
    </div>
    </div>
  )
}

export default Loginform