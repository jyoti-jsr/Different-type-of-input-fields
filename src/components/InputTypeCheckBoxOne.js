import { useState } from "react";

export default function InputTypeCheckBoxOne() {
  const [state, setState] = useState({
    isChecked: false
  });
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log(value);
    setState((state) => ({ ...state, [name]: value }));
  };
  return (
    <>
      <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={state.isChecked}
          onChange={handleChange}
        />
        Is Checked?
      </label>
      <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
    </>
  );
}
