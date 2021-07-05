import { Link } from "react-router-dom";

//icons
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrConfigure } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

//components
import Nav from "../../components/Nav";

//api
import api from "../../service/api";
import { AxiosResponse } from "axios";

//styles
import "../../styles/index.scss";

const AdminLessons: React.FC = () => {
  const [lessons, setLessons] = useState<AxiosResponse | any>([]);

  useEffect(() => {
    async function getApi() {
      try {
        const req = await api.get(`/allLessons`);

        return setLessons(req.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, []);

  //Listando em ordem alfabética
  lessons.sort(function (a: any, b: any) {
    return a.nameModule > b.nameModule
      ? 1
      : b.nameModule > a.nameModule
      ? -1
      : 0;
  });
  return (
    <>
      <div className="container">
        <Nav />
        <div className="home-content">
          <h1>Aulas:</h1>
          <div className="list-modules">
            <Link to="/admin/addlesson">
              <div id="Admin-Add-Lesson" className="card-module-container">
                <span className="add">
                  <IoMdAddCircleOutline />
                </span>
              </div>
            </Link>
            {lessons.map((e:any )=> {
                return(
                    <div id="Admin-Lessons" key={e.id} className="card-module-container">
                    
                    <div id="Thumb-Lessons" className="card-module-thumb">
                        <img src={e.thumb} alt="Thumb" />
                    </div>
                    <div id="Description-Lessons" className="card-module-description">
                        <h1>{e.name}</h1>
                        <p>{e.description}</p>
                        <div className="bottom-module">
                            <div id="Buttons-admin-lesson" className="bottom-module-buttons">
                                <span id="edit" ><GrConfigure /></span>
                                <span id="delete" ><FaTrashAlt /></span>
                            </div>
                        </div>
                    </div>
                    </div>
                )
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLessons;
