export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment {aid}</label> <br /> <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify`}
        style={{ width: "40%", height: "160px" }}
      ></textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>{" "}
            </td>
            <td>
              <input id="wd-points" defaultValue={100}></input>
            </td>
          </tr>
        </tbody>
        {/* Complete on your own */}
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: "10px" }}></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZES">QUIZES</option>
              </select>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: "10px" }}></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="LETTER">Letter-grade</option>
              </select>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: "10px" }}></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="IN-PERSON">In-Person</option>
              </select>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: "10px" }}></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-online-entry-option">
                Online Entry options
              </label>
              <br />
              <input
                id="wd-text-entry"
                type="checkbox"
                name="online-entry-options"
              />
              <label htmlFor="wd-text-entry"> Text Entry </label>
              <br />
              <input
                id="wd-website-url"
                type="checkbox"
                name="online-entry-options"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                id="wd-media-recordings"
                type="checkbox"
                name="online-entry-options"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                id="wd-student-annotation"
                type="checkbox"
                name="online-entry-options"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                id="wd-file-upload"
                type="checkbox"
                name="online-entry-options"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: "10px" }}></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td align="right">
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input id="wd-assign-to" defaultValue={"Everyone"}></input>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: "10px" }}></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: "10px" }}></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />
            </td>
            <td>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button type="button">Cancel</button>{" "}
        <button type="submit">Save</button>
      </div>
    </div>
  );
}
