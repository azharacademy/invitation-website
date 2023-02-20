// import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import SideBar from './component/sidebar/SideBar'
// import Navbar from './component/navbar/Navbar';
// import WeddingCards from './component/weddingcard/WeddingCards';
// import LoginForm from './loginpage/LoginForm';
// import DropDown from './dropdown/DropDown';
import SingUp from './component/singup/SingUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />
    },
    {
      path: "/signup",
      element: <SingUp />
    }
  ]);
  return (
    <div >
      {/* <SingUp/> */}
      {/* <Navbar /> */}
      <RouterProvider router={router}></RouterProvider>
      {/* <WeddingCards/> */}
      {/* <Navbar /> */}
      {/* <WeddingCards/> */}
      {/* <SideBar/> */}
    </div>
  );
}

export default App;
