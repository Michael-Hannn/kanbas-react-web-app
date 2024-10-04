import { IoBanOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button className="btn btn-med btn-secondary">
      <IoBanOutline className="fs-5" />
      Unpublish </button>
      
      <button className="btn btn-med btn-third">
      <IoIosCheckmarkCircleOutline className="fs-5 me-2"/>
      Publish</button><br/>
      <br/>

      <button className="btn btn-med btn-secondary button-size text-start">
      <IoDownloadOutline className="fs-5 me-2" />
      Import Existing Content
      </button><br/>

      <button className="btn btn-med btn-secondary button-size text-start">
      <LiaFileImportSolid className="fs-5 me-2" />
      Import from Commons
      </button><br/>

      <button className="btn btn-med btn-secondary button-size text-start">
      <MdHome className="fs-5 me-2" />
      Choose Home Page
      </button><br/>

      <button className="btn btn-med btn-secondary button-size text-start">
      <IoStatsChartSharp className="fs-5 me-2" />
        View Course Stream
        </button><br />

      <button className="btn btn-med btn-secondary button-size text-start">
      <TfiAnnouncement className="fs-5 me-2" />
        New Announcement
        </button><br />
    
      <button className="btn btn-med btn-secondary button-size text-start">
      <IoStatsChartSharp className="fs-5 me-2" />
        New Analytics
        </button><br/>

      <button className="btn btn-med btn-secondary button-size text-start">
      <GoBellFill className="fs-5 me-2" />
        View Course Notifications
        </button>
    </div>
);}






/*** 
 * 
 * Personal notes!!!
 * 
 * Completed status page before 4.5 so implementation is off
 * review to see which one is more efficient
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      {/* Complete the rest of the buttons 
    </div>
);}
***/