import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosFresh from "axios";

const Register = () => {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');


  const submit = async e => {
    e.preventDefault();
    try{
      const res = await axiosFresh.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCf2T7u4uQrNb5TlPWOQTC-Q3OUo3UoUeY', {
        email: email,
        password: password,
        returnSecureToken: true,
      
      })
      console.log(res.data)
   history('/login')
   
    } catch(ex) {
      if(ex.response.data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
        setError('Wybrane hasło jest za słabe. Hasło musi mieć minimum 6 znaków')
      } else if(ex.response.data.error.message === 'EMAIL_EXISTS') {
        setError('Wybrany email istnieje. Zaloguj się lub wybierz inny email do rejestracji.')
      }
    
     console.log(ex.response)
    }
  };
  

  return (
    <div className="registerPage">
      <h2>Rejestracja</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>hasło</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        {error ? (
        <div className="alert alert-danger mt-3"> {error} </div> ) : null}
        <button className="btn btn-primary">Zarejestruj</button>
      </form>
    </div>
  );
};

export default Register;
