import React, { useState } from "react";
import api from "../../service/api";
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
import { useLocation } from "react-router-dom";

const AddLesson: React.FC = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const locationState = useLocation();
  const moduleId: any = locationState.state;
  async function EditLesson() {
    try {
      await api.put(`/editlesson/${moduleId.id}`, {
        name: name,
        date: date,
        description: description,
      });
      alert(`Aula editada!`);
      return (window.location.href = "/admin/adminlessons");
    } catch (error) {
      window.alert("Houve erro!");
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
            <h1>Editar aula:</h1>
            <div className="input">
              <span>
                <HiIdentification />
              </span>
              <input
                type="text"
                placeholder="Nome da aula"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div id="text-area" className="input">
              <span>
                <FaCalendarAlt />
              </span>
              <input
                type="text"
                placeholder="Data da aula"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="input">
              <span>
                <MdDescription />
              </span>
              <input
                type="text"
                placeholder="Descrição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <input id="selecao-arquivo" type="file"></input>
            <div onClick={() => EditLesson()} className="button-submit">
              Enviar
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddLesson;
