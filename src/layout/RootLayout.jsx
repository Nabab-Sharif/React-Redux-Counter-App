
import Navbar from './../components/layouts/Navbar';
import Footer from './../components/layouts/Footer';
import { Outlet } from 'react-router-dom';



const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
