import React, { useEffect, useState } from "react";

import api from "../../service/api"

//images
import LogoWhite from "../../assets/LogoWhite.svg";

//icons
import { FaCalendarAlt } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdDescription } from "react-icons/md";

//components
import Logo from "../../assets/logo.svg";
import Nav from "../../components/Nav";

//styles
import "../../styles/auth.scss";

const AddLesson: React.FC = () => {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [module, setModule] = useState("");

  async function AddLesson() {
    try {
      await api.post("/createlesson", {
        name: name,
        date: date,
        description: description,
        module: module,
      });

      alert(`Aula adicionado!`);
      return (window.location.href = "/admin/adminlessons");
    } catch (error) {
      console.log("Houve erro!");
    }
  }

  return (
    <>
      <div className="container">
        <Nav />
        <div className="admin-login-left">
          <img src={LogoWhite} alt="Logotipo" />
        </div>
        <div className="admin-login-right">
          <img className="logo-mobile" src={Logo} alt="Logotipo" />
          <form className="form-login">
            <h1>Adicionar aula:</h1>
            <div className="input">
              <span>
                <HiIdentification />
              </span>
              <input type="text" placeholder="Nome da aula" />
            </div>
            <div id="text-area" className="input">
              <span>
                <FaCalendarAlt />
              </span>
              <input type="text-area" placeholder="Data da aula" />
            </div>
            <div className="input">
              <span>
                <MdDescription />
              </span>
              <input type="text" placeholder="Descrição" />
            </div>
            <div className="input">
              <span>
                <MdDescription />
              </span>
              <input type="select" placeholder="Módulo" />
            </div>

            <label htmlFor='selecao-arquivo'>Selecione imagem para thumb &#187;</label>
            <input id='selecao-arquivo' type='file'></input>

            <div className="button-submit">Adicionar</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddLesson;
