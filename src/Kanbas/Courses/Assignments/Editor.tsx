import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignments = db.assignments;

  const assignment = assignments.find(assign => assign._id === aid);

    return (
  
    
      <div id="wd-assignments-editor">
        <div style={{ textAlign: 'left', marginLeft: '230px'}}>
        <p>
        <label htmlFor="wd-name" className="form-label">
          <b>Assignment Name</b></label>
        </p>
        </div>
        
        <div style={{ textAlign: 'center'}}>
        <input id="wd-name" value={assignment?.title} className="col-8 text-start" /><br /><br />
        </div>
        
        <div style={{ textAlign: 'center'}}>
        <textarea id="wd-description" cols={50} rows={12} className="col-8 text-start">
          The assignment is available online Submit a link to the landing page of your
          Web application running on Netlify. The landing page should include the following:
          Your full name and section Links to each of the lab assignments Link to the 
          Kanbas application Links to all relevant source code repositories The Kanbas 
          application should include a link to navigate back to the landing page.
        </textarea>
        </div>
        <br />

        <table style={{ textAlign: 'left', marginLeft: '630px'}}>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points" className="text-right">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} style={{width: '350px'}} />
            </td>
          </tr>
          <br/>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group" style={{width: '400px'}}>
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                </select>
            </td>
          </tr>
          <p></p>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as" style={{width: '400px'}}>
                <option selected value="Percentage">Percentage</option>
                <option value="Decimal">Decimal</option>
                </select>
            </td>
          </tr>
        </table>

        <table style={{ textAlign: 'left', marginLeft: '300px'}}>
          <p></p>
          <div>
              <div className="wd-asignment-border">
              <tr>
                <td align="right" valign="top">
                  <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type" style={{textAlign: 'right'}}>
                    <option selected value="Online">Online</option>
                    <option value="In Person">In Person</option>
                    </select>
                </td>
              </tr>
              <tr>
              <td></td>
                    <td align="left" valign="top">
                    <label htmlFor="wd-Online-Entry"><strong>Online Entry Options</strong></label><br/>
                    
                    <input type="checkbox" name="text-entry" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="website-url" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="media-recording" id="wd-media-recording"/>
                    <label htmlFor="wd-media-recording">Media Recordings</label><br/>

                    <input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                    <input type="checkbox" name="file-uploads" id="wd-file-uploads"/>
                    <label htmlFor="wd-file-uploads">File Uploads</label>
                    </td> 
              </tr>
              </div>
            </div>

          <div className="wd-asignment-border">
          <br/>
          <tr>
            <td></td>
            <td align="left" valign="top">
              <label htmlFor="wd-assign-to">Assign Assign to</label><br/>
              <input placeholder="Everyone      X" /><br/>
            </td>
          </tr>
          <br/>
          <tr>
            <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-due-date"> Due: </label><br/>
                <input type="date"
                id="wd-due-date"
                value="2024-05-13"/><br/>
            </td>
          </tr>
          <br/>
          <tr>
          <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-from"> Available from </label><label htmlFor="available-until">Until </label><br/>
                <input type="date"
                id="wd-available-from"
                value="2024-05-06"/>
    
                <input type="date"
                id="available-until"
                value="2024-05-20"/><br/>
            </td>
          </tr>
          </div>
        </table>
    
        <div style={{marginLeft: '950px'}} className='mt-2'>
          <button id="wd-Save" className="btn btn-medd btn-danger" style={{ marginRight: '10px' }}>
        Save</button>
        
        <button id="wd-Cancel" className="btn btn-med btn-secondary">

        Cancel</button>
        </div >
          
      </div>
  );}
  