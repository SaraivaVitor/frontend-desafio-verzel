//icons
import { GrConfigure } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
//components
import Nav from "../../components/Nav";
import { useHistory } from "react-router-dom";
//api
import api from "../../service/api";
//styles
import "../../styles/index.scss";
//images
import LogoWhite from "../../assets/LogoWhite.svg";
import { Lesson } from "../../typings";

const AdminLessons: React.FC = () => {
  const [lessons, setLessons] = useState([]);
  const historyEdit = useHistory();
  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allLessons`);
        console.log(req.data);
        return setLessons(req.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, []);
  async function DeleteLesson(id: string) {
    await api.delete(`/deletelesson/${id}`);
    alert(`Aula Deletada!`);
    return (window.location.href = "/admin/adminlessons");
  }
  const sortedLessons = lessons.sort(function (a: Lesson, b: Lesson) {
    return a.name > b.name
      ? 1
      : b.name > a.name
      ? -1
      : 0;
  });
  console.log(lessons)
  return (
    <>
      <div className="container">
        <Nav />
        <div className="home-content">
          <h1>Aulas:</h1>
          <div className="list-modules">
            {sortedLessons.map((lesson: Lesson) => {
              return (
                <div
                  id="Admin-Lessons"
                  key={lesson._id}
                  className="card-module-container"
                >
                  <div id="Thumb-Lessons" className="card-module-thumb">
                    <img src={LogoWhite} alt="Thumb" />
                  </div>
                  <div
                    id="Description-Lessons"
                    className="card-module-description"
                  >
                    <h1>{lesson.name}</h1>
                    <p>{lesson.description}</p>
                    <div className="bottom-module">
                      <p>{lesson.date}</p>
                      <div
                        id="Buttons-admin-lesson"
                        className="bottom-module-buttons"
                      >
                        <span
                          onClick={() =>
                            historyEdit.push({
                              pathname: "/admin/editlesson",
                              state: { id: lesson._id },
                            })
                          }
                        >
                          <GrConfigure />
                        </span>
                        <span onClick={() => DeleteLesson(lesson._id)} id="delete">
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

export default AdminLessons;
