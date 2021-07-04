import { Link } from 'react-router-dom';



//icons
import { IoMdAddCircleOutline } from "react-icons/io"
import { GrConfigure } from "react-icons/gr"
import { FaTrashAlt } from "react-icons/fa"

//components
import Nav from "../../components/Nav"

//styles
import  '../../styles/index.scss';



// //Ordenando em ordem alfabética
// modules.sort(function (a, b) {
// 	return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
// });

const AdminLessons: React.FC = () => {
  return (
      <>
        <div className="container">
            <Nav />
            <div className="home-content">
            <h1>Aulas:</h1>
            <div className="list-modules">
                <Link to="/admin/addlesson" >
                    <div id="Admin-Add-Lesson" className="card-module-container">
                        <span className="add"><IoMdAddCircleOutline /></span>
                    </div>
                </Link>
                {/* {modules.map(e => {
                return(
                    <div id="Admin-Lessons" key={e.id} className="card-module-container">
                    
                    <div id="Thumb-Lessons" className="card-module-thumb">
                        <img src={e.thumb} alt="Thumb" />
                    </div>
                    <div id="Description-Lessons" className="card-module-description">
                        <h1>{e.name}</h1>
                        <p>Pequena descrição sobre o que vai ser aprendido na aula e o que vai ser utilizado.</p>
                        <div className="bottom-module">
                            <div id="Buttons-admin-lesson" className="bottom-module-buttons">
                                <span id="edit" ><GrConfigure /></span>
                                <span id="delete" ><FaTrashAlt /></span>
                            </div>
                        </div>
                    </div>
                    </div>
                )
                })} */}
          </div>
          </div>
        </div>
      </>
  )
}

export default AdminLessons;