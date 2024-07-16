import React from "react";

const Form = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" defaultValue="John" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" defaultValue="Doe" />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" id="age" name="age" />
        <br />
        <label htmlFor="weight">Weight:</label>
        <br />
        <input type="number" id="weight" name="weight" />
        <br />
        <label htmlFor="ethnicity">Ethnicity:</label>
        <br />
        <select id="ethnicity" name="ethnicity">
          <option value="Indigenous American/Native Alaskan">Indigenous American/Native Alaskan</option>
          <option value="Black African">Black African</option>
          <option value="Black or African American">Black or African American</option>
          <option value="East Asian">East Asian</option>
          <option value="Southeast Asian">Southeast Asian</option>
          <option value="South Asian">South Asian</option>
          <option value="Native Hawaiian or Pacific Islander">Native Hawaiian or Pacific Islander</option>
          <option value="Latine/Hispanic/Latinx or Spanish origin">Latine/Hispanic/Latinx or Spanish origin</option>
          <option value="Middle Eastern or North African">Middle Eastern or North African</option>
          <option value="White or European Descent">White or European Descent</option>
          <option value="Prefer not to say">Prefer not to say</option>
          <option value="Prefer to describe">Prefer to describe</option>
        </select>
        <br />
        <label>Sex:</label>
        <br />
        <input type="radio" id="male" name="sex" value="male" />
        <label htmlFor="male">Male</label>
        <br />
        <input type="radio" id="female" name="sex" value="female" />
        <label htmlFor="female">Female</label>
        <br />
        <input type="radio" id="other" name="sex" value="other" />
        <label htmlFor="other">Other</label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
