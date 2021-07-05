import React, { useEffect, useState } from "react";

//images
import Logo from "../../assets/logo.svg";
import LogoWhite from "../../assets/LogoWhite.svg";

//icons
import { RiLockPasswordFill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";

//styles
import "../../styles/auth.scss";
import api from "../../service/api";

const AdminLogin: React.FC = () => {

  return (
    <>
      <div className="container">
        <div className="admin-login-left">
          <img src={LogoWhite} alt="Logotipo" />
        </div>
        <div className="admin-login-right">
        <img className="logo-mobile" src={Logo} alt="Logotipo" />
          <form className="form-login">
            <div className="input">
                <span><IoMdMail /></span>
                <input type="text" placeholder="Email" name="email" />
            </div>
            <div className="input">
                <span><RiLockPasswordFill /></span>
                <input type="text" placeholder="Senha" name="email" />
            </div>
            <div className="button-submit">Entrar</div>
            <p>
                Não possue conta ? <Link to="/admin/singup">Cadastre-se!</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
