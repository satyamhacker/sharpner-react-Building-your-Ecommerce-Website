import React, { useContext, useEffect } from 'react';
import Context  from '../Context/Context';
import { useNavigate } from 'react-router-dom';

 function LoginApi(props) {

  const contextLoginData = useContext(Context);
  const navigate = useNavigate();

  if(contextLoginData.defaultLoginData.email == props.data.email && contextLoginData.defaultLoginData.password == props.data.password)
  {
    console.log(contextLoginData.isUserLogin());
     // Redirect to a different route after successful login
    navigate('/store');

  }
  else
  {
    alert('wrong email or password')
  }


  return(
    <>
    
    </>
  )

}

export default LoginApi;





