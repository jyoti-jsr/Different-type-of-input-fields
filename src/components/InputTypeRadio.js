import { useState } from "react";
export default function InputTypeRadio() {
  const [state, setState] = useState({
    gender: ""
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(state);
  return (
    <>
      <form>
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={handleChange}
          checked={state.gender === "male"}
        />
        <label>Male</label>
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={handleChange}
          checked={state.gender === "female"}
        />
        <label>Female</label>
      </form>
      <h5>Gender : {state.gender}</h5>
    </>
  );
}
