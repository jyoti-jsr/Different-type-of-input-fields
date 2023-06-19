import InputTypeCheckBoxOne from "./components/InputTypeCheckBoxOne";
import InputTypeCheckBoxTwo from "./components/InputTypeCheckBoxTwo";
import InputTypeRadio from "./components/InputTypeRadio";
import InputTypeselect from "./components/InputTypeSelect";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InputTypeCheckBoxOne />
      <InputTypeCheckBoxTwo />
      <InputTypeselect />
      <InputTypeRadio />
    </div>
  );
}
