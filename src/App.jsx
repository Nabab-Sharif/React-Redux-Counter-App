
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider,
} from "react-router-dom";

import Error from './components/error/Error';
import RootLayout from './layout/RootLayout';
import CounterPage from './pages/CounterPage'
import Home from "./pages/home/Home";
import ReuseCounter from "./pages/reuseCounter/ReuseCounter";




const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path="/reuseCounter" element={<ReuseCounter />} />
          <Route path='*' element={<Error />} />
        </Route>
      </>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
