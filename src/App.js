// import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import WeddingCards from './component/weddingcard/WeddingCards';
// import LoginForm from './loginpage/LoginForm';
// import DropDown from './dropdown/DropDown';
// import SingUp from './singup/SingUp';

function App() {
  return (
    <div >
      {/* <SingUp/> */}
      <Navbar />
      <WeddingCards/>
    </div>
  );
}

export default App;
