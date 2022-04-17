import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axiosFresh from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {

// const auth = useContext(AuthContext);
const [auth, setAuth] = useAuth();

const history = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [valid, setValid] = useState(null);

const submit = async (e) => {

    e.preventDefault();

try {
 const res = await axiosFresh.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCf2T7u4uQrNb5TlPWOQTC-Q3OUo3UoUeY'
 , {
   email: email,
   password: password,
   returnSecureToken: true,
 });

setAuth(true, res.data);
 history('/');
}
catch(ex) {
setError(ex.response.data.error.message)
console.log(ex.response.data.error.message)
}
  
}


  return (
    <div className="loginPage">
      <h2>Logowanie</h2>
      <form onSubmit={submit}>

        <div className="form-group">
          <label>email</label>
          <input type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-control" />
        </div>

        <div className="form-group">
          <label>hasło</label>
          <input type="password"
          value={password} 
          onChange={e => setPassword( e.target.value)}
           className="form-control" />
        </div>
        {error ? (
        <div className="alert alert-danger"> {error} </div> ) : null}
        <button className="btn btn-primary mt-3">Zaloguj</button>
      </form>
    </div>
  );
};

export default Login;
