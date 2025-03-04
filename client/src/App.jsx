import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  console.log("App is rendering!"); // Debugging

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
