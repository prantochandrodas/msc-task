import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

  return (
    <>
       <RouterProvider router={router} />
       <ToastContainer/>
    </>
  )
}

export default App
