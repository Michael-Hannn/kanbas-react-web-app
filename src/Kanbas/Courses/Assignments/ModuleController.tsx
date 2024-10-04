import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoBanOutline } from "react-icons/io5";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function ModulesController() {
  return (
    <div>
        <div id="wd-modules-controller" className="text-nowrap ">
        <button id="wd-add-Assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment</button>
        <button id="wd-group-assignment" className="btn btn-lg btn-secondary float-end me-1" >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
        </button>

        <HiMiniMagnifyingGlass className="fs-3 ps-1"/>
        <input id="wd-search-assignment" 
        type="text"
        style={{ width: '250px' }}
        />
        </div>
    </div>
);}
