import { useState } from "react";

export default function InputTypeselect() {
  const [state, setState] = useState({ carBrand: "" });
  const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];

  const carBrandOption = carBrands.map((car, index) => (
    <option value={car} key={index}>
      {car}
    </option>
  ));

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <form>
        <label>
          Car Brands
          <select
            value={state.carBrand}
            onChange={handleChange}
            name="carBrand"
          >
            <option value={""} disabled>
              --Pick a car brand--
            </option>
            {carBrandOption}
            <option>Audi</option>
          </select>
        </label>
      </form>
      <h5>Favorite car brand: {state.carBrand}</h5>
    </>
  );
}
