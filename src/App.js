// import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
// import SideBar from './component/sidebar/SideBar'
// import WeddingCards from './component/weddingcard/WeddingCards';
// import LoginForm from './loginpage/LoginForm';
// import DropDown from './dropdown/DropDown';
import SingUp from './component/singup/SingUp';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Birthday from './component/birthday/Birthday';
import Festivals from './component/festivals/Festivals';
import OpeningCeremony from './component/Openingceremony/OpeningCeremony';
import Wedding from './component/wedding/Wedding';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import BirthAnouncementInvitation from './component/AllCards/BirthAnouncementInvitation/BirthAnouncementInvitation';
import Root from './component/Root/Root';
// import Card1 from './component/MuslimMarriage/Card1/Card1';
import Card2 from './component/MuslimMarriage/Card2/Card2';
import Card1 from './component/MuslimMarriage/Card1/Card1'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/signup' element={<SingUp />} />
        <Route path='/card2' element={<Card2 />} />
          <Route path='/card1' element={<Card1 />} />
        <Route path='/' element={<Root />}>
          <Route index element={<Wedding />} />
          <Route path='/birthday' element={<Birthday />} />
          <Route path='/festivals' element={<Festivals />} />
          <Route path='/openingceremony' element={<OpeningCeremony />} />

        </Route>
      </Route>
    )
  )

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
