import React, { useEffect, useRef, useState } from "react";

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
import { FormEvent } from "react";

const AdminLogin: React.FC = () => {
  const emailRef:any = useRef()
  const passwordRef:any = useRef()

  const handlelogin = async (prop:FormEvent) => {
    prop.preventDefault()
    try {
      const { data } = await api.post("/adminauth", {
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      localStorage.setItem("@cursosOn", data.token)
      window.location.replace("/")
    } catch (error) {
      
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
          <form onSubmit={handlelogin} className="form-login">
            <div className="input">
                <span><IoMdMail /></span>
                <input ref={emailRef} type="text" placeholder="Email" />
            </div>
            <div className="input">
                <span><RiLockPasswordFill /></span>
                <input ref={passwordRef} type="password" placeholder="Senha" />
            </div>
            <button className="button-submit">Entrar</button>
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
