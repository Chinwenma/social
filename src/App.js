import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";


import {
  createBrowserRouter,useNavigate, Outlet, RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";

function App() {
  const currentUser = false;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>

    );
  };
  const  protectedRoute = ({ children }) => {
    if (!currentUser) {
      return
      <useNavigate to="/login" />;

    }
    return children;
  };



  const router = createBrowserRouter([


    {
      path: "/",
      element: (
        <protectedRoute>
          <Layout />
        </protectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
