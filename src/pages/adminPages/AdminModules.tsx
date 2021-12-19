import React, { useEffect, useState } from "react";
//icons
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
//components
import Nav from "../../components/Nav";
//api
import api from "../../service/api";
//styles
import "../../styles/index.scss";
import { Link, useHistory } from "react-router-dom";
//images
import LogoWhite from "../../assets/LogoWhite.svg";
import { Module } from "../../typings";
const AdminModules: React.FC = () => {
  const [modules, setModules] = useState([]);
  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allmodules`);
        return setModules(req.data);
      } catch (err) {
        window.alert(err);
      }
    }
    getApi();
  }, []);
  async function DeleteModule(id: string) {
    await api.delete(`/deletemodules/${id}`);
    alert(`Aula Deletada!`);
    return (window.location.href = "/admin/adminmodules");
  }
  const historyAdd = useHistory();
  const historyEdit = useHistory();
  const sortedModules = modules.sort(function (a: Module, b: Module) {
    return a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0;
  });
  return (
    <>
      <div className="container">
        <Nav />
        <div className="home-content">
          <h1>Módulos:</h1>
          <div className="list-modules">
            <Link to="/admin/addmodule">
              <div id="AdminAdd" className="card-module-container">
                <span className="add">
                  <IoMdAddCircleOutline />
                </span>
              </div>
            </Link>
            {sortedModules.map((currentModule: Module) => {
              const quantityLength = currentModule.lessons?.length;
              return (
                <div
                  id="AdminModule"
                  key={currentModule._id}
                  className="card-module-container"
                >
                  <div className="card-module-thumb">
                    <img src={LogoWhite} alt="Thumb" />
                  </div>
                  <div className="card-module-description">
                    <h1>{currentModule.name}</h1>
                    <div className="bottom-module">
                      <p>
                        {quantityLength === undefined ? "0" : quantityLength}/
                        {currentModule.totalQuanity} aulas
                      </p>
                      <div className="bottom-module-buttons">
                        <span
                          onClick={() =>
                            historyAdd.push({
                              pathname: "/admin/addlesson",
                              state: { id: currentModule._id },
                            })
                          }
                        >
                          <RiVideoAddFill />
                        </span>
                        <span
                          onClick={() =>
                            historyEdit.push({
                              pathname: "/admin/editmodule",
                              state: { id: currentModule._id },
                            })
                          }
                        >
                          <AiFillEdit />
                        </span>
                        <span onClick={() => DeleteModule(currentModule._id)} id="delete">
                          <FaTrashAlt />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModules;
