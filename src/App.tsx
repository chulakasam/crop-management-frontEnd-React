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
import {AddEquipment} from "./pages/addEquipment.tsx";
import {AddVehicle} from "./pages/addVehicle.tsx";
import {AddField} from "./pages/addField.tsx";
import {AddLog} from "./pages/addLog.tsx";
import {AddCrop} from "./pages/addCrop.tsx";
import AuthLayout from "./components/AuthLayOut.tsx";
import SignIn from "./pages/SignIn.tsx";
import {Signup} from "./pages/SignUp.tsx";

//import {UpdateStaff} from "./pages/updateStaff.tsx";
//import {DeleteStaff} from "./pages/deleteStaff.tsx";


function App() {
  const routes=createBrowserRouter([

      {
          path: "",
          element: <AuthLayout />,
          children: [
              { path: "/SignIn", element: <SignIn /> },
              { path: "", element: <Signup /> },
          ],
      },
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {path :'/dashboard',element :<Dashboard/>},
        {path :'/staff',element :<Staff/>},
            { path: "/staff/addStaff", element: <AddStaff/> },
            //{ path: "/staff/updateStaff", element: <UpdateStaff/> },
            //{ path: "/staff/deleteStaff", element: <DeleteStaff/> },


        {path :'/field',element :<Field/>},
        //   TODO--------field navigation
            { path: "/field/addField", element: <AddField/> },

        {path :'/equipment',element :<Equipment/>},
        //   TODO--------equipment navigation
            { path: "/equipment/addEquipment", element: <AddEquipment/> },


        {path :'/vehicle',element :<Vehicle/>},
        //   TODO--------vehicle navigation
            { path: "/vehicle/addVehicle", element: <AddVehicle/> },


        {path :'/log',element :<Log/>},
        //   TODO--------log navigation
            { path: "/log/addLog", element: <AddLog/> },

        {path :'/crop',element :<Crop/>},
        //   TODO--------crop navigation
            { path: "/crop/addCrop", element: <AddCrop/> },
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
