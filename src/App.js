import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import { Login } from "./Components/Login/login.jsx";
import { Dashboard } from "./Components/Dashboard/dashboard.jsx";


export const app = createContext();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path : "/Dashboard",
    element : <Dashboard/>
  }

]);
function App() {
  const [token, setToken] = useState(null);
    return (

        <app.Provider value={[token,setToken]} >
            <RouterProvider router={router} />
        </app.Provider>
    );
}

export default App;