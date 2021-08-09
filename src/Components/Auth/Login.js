import React from "react";
import styled from "styled-components";
import AuthLayout from ".";
import Images from "../../Assets/Images/images";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <AuthLayout bg={Images.loginbg}>
      <LoginModal>
        <div className="heading">
          <h1>TOURTOH</h1>
          <h3>Your adventures are waiting</h3>
        </div>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Username or Email"/> 
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password"/>
          </div>
          <div className="input-group">
            <button className="main">Login</button>
          </div>
          <p>OR</p>
          <div className="input-group">
            <button className="red">Login with Google</button>
          </div>
          <div className="input-group">
            <button className="orange">Login with Apple</button>
          </div>
          <div className="input-group">
            <button className="blue">Login with Google</button>
          </div>
        </form>
        <p>New to Tourtoh? <Link to="">Create a New Account</Link></p>
      </LoginModal>
    </AuthLayout>
  );
};

export default Login;

const LoginModal = styled.div`
  background: linear-gradient(180deg, #083356 0%, #375571 47.4%, #B7BBBF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #ffffff;
    font-sixe: 14px;
    font-family: TT Norms;
    padding-bottom: 1px;

    a {
      &hover {
        color: blue;
      }
    }
  }


  .heading {
    text-align: center;

    h1 {
      font-size: 30px;
      font-weight: bold;
      color: #fff;
      padding-top: 3px;
    }

    h3 {
      font-size: 18px;
      padding-bottom: 5px;
      font-family: Karima;
      color: #fff;
    }
  }
  form {
    width: 90%;
    text-align: center;

    p {
      font-size: 2rem;
      color: #3f3d56;
    }

    .input-group {
      width: 100%;
      margin-bottom: 10px;

      input {
        border: none;
        border-radius: 8px;
        width: 100%;
        padding: 0.8rem;
        outline: none;
        background: #fff;
        font-size: 1.1rem;
        color: #fff;
      }

      button {
        border: none;
        background: #fff;
        border-radius: 8px;
        width: 100%;
        outline: none;
        font-size: 2rem;
        font-weight: bold;
      }

      .red {
        color: #FFC367;
      }

      .blue {
        color: blue;
      }

      .orange {
        color: #FEE05F;
      }

      .main {
        background: #3F3D56;
        color: #fff;
      }
    }
  }
`