import React from 'react'

const Login = () => {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center w-100' style={{height: '100vh'}}>
          <div className='row w-100'>
          <div className='col col-md-4 offset-md-4 p-5 wrapper rounded shadow-lg' style={{background:"#DAE5FF"}}>
          <form className='form-group d-flex flex-column gap-3'>
            <h3 className='text-center'>CurePilot Login</h3>
            <input type="email" className="form-control" placeholder='Enter Your Email' />
            <input type="password" className="form-control" placeholder='Enter Password'/>
            <button type='submit' className='btn btn-success'>Submit</button>
          </form>
          </div>
          </div>
        </div>
      )
}

export default Login