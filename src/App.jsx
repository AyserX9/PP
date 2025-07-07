import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Courses from "./component/Courses";
import Membership from "./component/Membership";

function App() {
  const MyRouter = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/membership" element={<Membership/>}/>
      </>
    )
  );
  return (
      <RouterProvider router={MyRouter} />
  );
}

export default App;