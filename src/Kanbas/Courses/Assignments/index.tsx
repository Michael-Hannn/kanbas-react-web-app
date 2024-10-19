import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesController from "./ModuleController";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { LuClipboardSignature } from "react-icons/lu";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
    return (
      <div>
      <ModulesController />
      <ul id="wd-modules" className="list-group rounded-0 mt-5">
     <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS 40% of Total
        <ModuleControlButtons />
        <LessonControlButtons />
        </div>
        <ul className="wd-lessons list-group rounded-0">



        {assignments.filter((assignment) => assignment.course === cid).map((assignment) => (
        <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <LuClipboardSignature className="me-2 fs-3" style={{ color: 'green' }} />
        <a className="wd-assignment-link" href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
          <strong>{assignment.title}</strong>
          </a>
          <LessonControlButtons />

          <div className="text-start ms-5">

          <p>Multiple Modules | <b>Not available until</b> {assignment.openDate} |</p>
            <p><b>Due</b> {assignment.dueDate} | 100 pts</p>
          </div>
          </li> ))}
      </ul>
      </li>
      </ul>
      </div>
      
  );}
  