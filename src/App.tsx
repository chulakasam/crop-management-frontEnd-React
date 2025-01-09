import { RouterProvider } from 'react-router';
import './App.css'
import {RootLayout} from "./components/RootLayout.tsx";
import {createBrowserRouter} from "react-router";
import {Dashboard} from "./pages/dashboard.tsx";
import {Staff} from "./pages/staff.tsx";
import {Field} from "./pages/field.tsx";
import {Vehicle} from "./pages/vehicle.tsx";
import {Equipment} from "./pages/equipment.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {Log} from "./pages/log.tsx";
import {Crop} from "./pages/crop.tsx";
import {AddStaff} from "./pages/addStaff.tsx";


function App() {
  const routes=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {path :'',element :<Dashboard/>},
        {path :'/staff',element :<Staff/>},
        { path: "/staff/addStaff", element: <AddStaff/> },
        {path :'/field',element :<Field/>},
        {path :'/equipment',element :<Equipment/>},
        {path :'/vehicle',element :<Vehicle/>},
        {path :'/log',element :<Log/>},
        {path :'/crop',element :<Crop/>}
      ]
    },

  ])

  return (
      <>
        <Provider store={store}>
          <RouterProvider router={routes}/>
        </Provider>
      </>
  )
}

export default App
