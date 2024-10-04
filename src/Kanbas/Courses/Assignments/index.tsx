import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesController from "./ModuleController";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { LuClipboardSignature } from "react-icons/lu";

export default function Assignments() {
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

        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <LuClipboardSignature className="me-2 fs-3" style={{ color: 'green' }} />
        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
          <strong>A1 - ENV + HTML</strong>
          </a>
          <LessonControlButtons />

          <div className="text-start ms-5">

          <p>Multiple Modules | <b>Not available until</b> May 6 at 12:00am |</p>
            <p><b>Due</b> May 13 at 11:59pm | 100 pts</p>
          </div>
          </li>

          <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <LuClipboardSignature className="me-2 fs-3" style={{ color: 'green' }} />
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
          <strong>A2 - CSS + BOOTSTRAP</strong>
          </a>
            <LessonControlButtons />

            <div className="text-start ms-5">

            <p>Multiple Modules | <b>Not available until</b> May 13 at 12:00am |</p>
            <p><b>Due</b> May 20 at 11:59pm | 100 pts</p>
            </div>
          </li>

          <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <LuClipboardSignature className="me-2 fs-3" style={{ color: 'green' }} />
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
          <strong>A3 - JAVASCRIPT + REACT</strong>
          </a>
            <LessonControlButtons />

            <div className="text-start ms-5">

            <p>Multiple Modules | <b>Not available until</b> May 20 at 12:00am |</p>
                <p><b>Due</b> May 27 at 11:59pm | 100 pts</p>
            </div>
          </li>
      </ul>
      </li>
      </ul>
      </div>
      
  );}
  