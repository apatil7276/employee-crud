import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import BtnPopup from './components/popup/BtnPopup';


function App() {
  return (
    <div className="App">
      {/* <EmployeeForm/> */}
      <EmployeeList/>
    {/* <BtnPopup/> */}
    </div>
  );
}

export default App;
