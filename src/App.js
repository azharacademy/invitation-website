// import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
// import SideBar from './component/sidebar/SideBar'
// import Navbar from './component/navbar/Navbar';
// import WeddingCards from './component/weddingcard/WeddingCards';
// import LoginForm from './loginpage/LoginForm';
// import DropDown from './dropdown/DropDown';
import SingUp from './component/singup/SingUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Birthday from './component/birthday/Birthday';
import Festivals from './component/festivals/Festivals';
import OpeningCeremony from './component/Openingceremony/OpeningCeremony';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />
    },
    {
      path: "/signup",
      element: <SingUp />
    },
    {
      path: "/birthday",
      element: <Birthday/>
    },
    {
      path: "/festivals",
      element: <Festivals/>
    },
    {
      path: "/openingceremony",
      element: <OpeningCeremony/>
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
      {/* <Birthday/> */}

    </div>
  );
}

export default App;
