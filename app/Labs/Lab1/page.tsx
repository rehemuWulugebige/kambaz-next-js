"use client";
import Image from "next/image";

export default function Lab1() {
  return (
    <div>
      <div id="wb-part1">
        <ol id="wb-polo-recepie">
          <li>meat</li>
          <li>onions</li>
          <li>sawza</li>
        </ol>
        <p>*********************</p>
        <ul id="wb-vacation-plan">
          <li>pack</li>
          <li>flight</li>
          <li>beach</li>
        </ul>
      </div>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image Tag</h4>
        Loading image from the internet:
        <br />
        <Image
          id="wd-tesla"
          width={400}
          height={300}
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
        />
      </div>
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="name" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            defaultValue="123@#$asd"
            id="wd-text-fields-password"
          />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" />{" "}
          <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input
            type="text"
            placeholder="Doe"
            defaultValue="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name"
          />
        </form>
      </div>
      <br />
      <br />
      <br />
      <h5>Text Boxes</h5>
      {/* hello world this is comment */}
      <label htmlFor="wd-textarea">
        Biography: <br />
        <textarea
          id="wd-textarea"
          cols={30}
          rows={10}
          defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        ></textarea>
      </label>
      <h5 id="wd-buttons">Buttons</h5>
      <button
        type="button"
        onClick={() => alert("Life is Good!")}
        id="wd-all-good"
      >
        Hello World
      </button>
      <br />
      <br />
      <br />
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <br />
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-check-comedy" />
      <label htmlFor="wd-check-comedy">Comedy</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input
        type="checkbox"
        name="check-genre"
        id="wd-chkbox-fantasy"
        defaultChecked
      />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h2>Select one</h2>
      <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre" defaultValue="COMEDY">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option value="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Select many</h2>
      <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
      <br />
      <select
        multiple
        id="wd-select-many-genre"
        defaultValue={["COMEDY", "SCIFI"]}
      >
        <option value="COMEDY"> Comedy </option>
        <option value="DRAMA"> Drama </option>
        <option value="SCIFI"> Science Fiction </option>
        <option value="FANTASY"> Fantasy </option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>Other HTML field types</h4>
      <label htmlFor="wd-text-fields-email"> Email: </label>
      <input
        type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"
      />
      <br />
      <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
      <input
        type="number"
        defaultValue="100000"
        placeholder="1000"
        id="wd-text-fields-salary-start"
      />
      <br />
      <label htmlFor="wd-text-fields-rating"> Rating: </label>
      <input
        type="range"
        defaultValue="4"
        max="5"
        placeholder="Doe"
        id="wd-text-fields-rating"
      />
      <br />
      <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
      <input type="date" defaultValue="2003-11-25" id="wd-text-fields-dob" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy texts <br />
    </div>
  );
}
