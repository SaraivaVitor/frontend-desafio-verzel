import React, { useEffect, useState } from "react";
//icons
import { IoMdAddCircleOutline } from "react-icons/io";
//components
import Nav from "../../components/Nav";
//api
import api from "../../service/api";
//styles
import "../../styles/index.scss";
import { Link } from "react-router-dom";
//images
import { Module } from "../../typings";
import ModuleCard from "../../components/ModuleCard";
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
              return (
                <ModuleCard
                  id={currentModule._id}
                  name={currentModule.name}
                  totalQuanity={currentModule.totalQuanity}
                  lessons={currentModule.lessons}
                  isAdmin
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModules;
