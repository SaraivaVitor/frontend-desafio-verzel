import React from "react";
//images
import LogoWhite from "../../assets/LogoWhite.svg";
//styles
import "../../styles/footer.scss";
//icons
import { GrConfigure } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import api from "../../service/api";

interface LessonsCardsProps {
  id: string;
  name: string;
  date: string;
  description: string;
  isAdmin?: boolean;
}

const LessonsCard = ({
  id,
  name,
  date,
  description,
  isAdmin,
}: LessonsCardsProps) => {
  const historyEdit = useHistory();
  async function DeleteLesson(id: string) {
    await api.delete(`/deletelesson/${id}`);
    alert(`Aula Deletada!`);
    return (window.location.href = "/admin/adminlessons");
  }
  return (
    <div id="Admin-Lessons" key={id} className="card-module-container">
      <div id="Thumb-Lessons" className="card-module-thumb">
        <img src={LogoWhite} alt="Thumb" />
      </div>
      <div id="Description-Lessons" className="card-module-description">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="bottom-module">
          <p>{date}</p>
          {isAdmin && (
            <div id="Buttons-admin-lesson" className="bottom-module-buttons">
              <span
                onClick={() =>
                  historyEdit.push({
                    pathname: "/admin/editlesson",
                    state: { id: id },
                  })
                }
              >
                <GrConfigure />
              </span>
              <span onClick={() => DeleteLesson(id)} id="delete">
                <FaTrashAlt />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonsCard;
