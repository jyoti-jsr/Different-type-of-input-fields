import { useState } from "react";

export default function InputTypeCheckBoxTwo() {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");
  const handleChnage = (e) => {
    setIsChecked(e.target.checked);
    setValue(e.target.value);
  };
  console.log(isChecked);
  console.log(value);

  return (
    <>
      <h6> Select your pizza topping:</h6>
      <div className="topping">
        <input
          type="checkbox"
          name=""
          checked={isChecked}
          onChange={handleChnage}
          value="pizza"
        />
        Pizza
      </div>
      <div className="result">
        {" "}
        is it checked ? {isChecked ? ("yes" ? value : "") : "No"}
      </div>
    </>
  );
}
