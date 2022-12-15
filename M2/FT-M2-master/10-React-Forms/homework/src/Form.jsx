import React, { useState } from 'react';

export const validate = (input) => {
  let error = {};
  if(!input.username){
    error.username= 'Username is required';
  }else if(!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = 'Username is invalid';
  }
  if(!input.password){
    error.password = 'Password is required';
  }else if(!/(?=.-*[0-9])/.test(input.password)) {
    error.password = 'Password is invalid';
  }
  return error;
}

export default function  Form() {
  let [input, setInput] = useState({
    username: '',
    password: ''
  });

  let handleInputChange = (e) => {
    setInput({ ...input, [e.target.name] : e.target.value
  })
    let objError = validate({...input, [e.target.name] : e.target.value })
    setError(objError);
}

let [error, setError] = useState({});


  return (
      <form>
        <div>
          <label>Username:</label>
          <input 
          type={'text'} 
          value={input.username}
          onChange={handleInputChange}
          name={'username'}
          className={error.username && 'danger'}
          placeholder={'ingresa un mail'}
          />
          {
            error.username && (<p>{error.username}</p>)
          }
        </div>
        
        <div>
          <label>Password:</label>
          <input 
          type={'password'} 
          value={input.password}
          onChange={handleInputChange}
          name={'password'}
          className={error.password && 'danger'}
          placeholder={'ingresa una contraseña'}
          />
          {
            error.password && (<p className={'danger'}>{error.password}</p>)
          }
        </div>
        
        <div>
          <input 
          type={'submit'} 
          value={'Ingresar'}
          />
        </div>
      </form>
  )
        }

