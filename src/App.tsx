import PensionForm from "./components/PensionForm/PensionForm";
import PensionChart from "./components/PensionChart/PensionChart";
import PensionTest from "./components/PensionTest/pensionTest";
import { usePensionContext } from "./context/PensionContext";

function App() {
  const { devMode, setDevMode } = usePensionContext();

  const toggleDevMode = () => {
    setDevMode(!devMode);
  };

  return (
    <div className="ark">
      <header>
        <h1 className="text-5xl font-bold">✨Daniel's Pension Tracker✨</h1>
        <br />
        <div className="flex justify-start">
          <button className="btn btn-secondary" onClick={toggleDevMode}>
            Toggle Dev Mode
          </button>
        </div>
      </header>

      <PensionTest />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <PensionForm className="flex-1" />
        <PensionChart className="flex-1" />
      </div>
      <br />
    </div>
  );
}

export default App;
