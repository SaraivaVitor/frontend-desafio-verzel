import React from "react";
import { useHistory } from "react-router-dom";
//images
import LogoWhite from "../../assets/LogoWhite.svg";
//styles
import "../../styles/footer.scss";
import { Lesson } from "../../typings";
//icons
import { FaTrashAlt } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import api from "../../service/api";

interface ModuleCardsProps {
  id: string;
  name: string;
  totalQuanity: string;
  isAdmin?: boolean;
  lessons: Lesson[];
}

const ModuleCard = ({ id, name, totalQuanity, lessons, isAdmin }: ModuleCardsProps) => {
  const history = useHistory();
  const historyAdd = useHistory();
  const historyEdit = useHistory();
  const quantityLength = lessons?.length;
  async function DeleteModule(id: string) {
    await api.delete(`/deletemodules/${id}`);
    alert(`Aula Deletada!`);
    return (window.location.href = "/admin/adminmodules");
  }
  return (
    <div
      key={id}
      className="card-module-container"
      onClick={() =>
        history.push({
          pathname: `/lessons`,
          state: { id: id },
        })
      }
    >
      <div className="card-module-thumb">
        <img src={LogoWhite} alt="Thumb" />
      </div>
      <div className="card-module-description">
        <h1>{name}</h1>
        <div className="bottom-module">
          <p>
            {quantityLength === undefined ? "0" : quantityLength}/{totalQuanity}{" "}
            aulas
          </p>
          {isAdmin && (
            <div className="bottom-module-buttons">
              <span
                onClick={() =>
                  historyAdd.push({
                    pathname: "/admin/addlesson",
                    state: { id: id },
                  })
                }
              >
                <RiVideoAddFill />
              </span>
              <span
                onClick={() =>
                  historyEdit.push({
                    pathname: "/admin/editmodule",
                    state: { id: id },
                  })
                }
              >
                <AiFillEdit />
              </span>
              <span onClick={() => DeleteModule(id)} id="delete">
                <FaTrashAlt />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
