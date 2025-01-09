import { Outlet } from "react-router";
import { Navigation } from "./navigations";

export function RootLayout(){
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    )
}