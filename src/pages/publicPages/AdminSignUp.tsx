import React, { useState } from "react";

//images
import Logo from "../../assets/logo.svg";
import LogoWhite from "../../assets/LogoWhite.svg";

//icons
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../service/api";

//styles
import "../../styles/auth.scss";

const AdminSingUp: React.FC = () => {
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function SignUp() {
    try {
      await api.post("/createuser", {
        firstName: firstName,
        email: email,
        password: password,
      });

      alert(`Voce foi cadastrado!`);
      return (window.location.href = "/");
    } catch (error) {
      console.log("Houve erro!");
    }
  }
 
  return (
    <>
      <div className="container">
        <div className="admin-login-left">
          <img src={LogoWhite} alt="Logotipo" />
        </div>
        <div className="admin-login-right">
          <img className="logo-mobile" src={Logo} alt="Logotipo" />
          <form id="Cadastro" className="form-login">
            <div className="input">
              <span>
                <FaUserCircle />
              </span>
              <input type="text" placeholder="Nome" name="firstName" onChange={ e => setName(e.target.value) } />
            </div>
            <div className="input">
              <span>
                <IoMdMail />
              </span>
              <input type="text" placeholder="Email" name="email" onChange={ e => setEmail(e.target.value) } />
            </div>
            <div className="input">
              <span>
                <RiLockPasswordFill />
              </span>
              <input type="password" placeholder="Senha" name="password" onChange={ e => setPassword(e.target.value) } />
            </div>
            <div onClick={()=>SignUp()} className="button-submit">Cadastrar</div>
            <p className="redirectSignUp" >
              Já possue conta ? <Link to="/login">Entre!</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSingUp;
