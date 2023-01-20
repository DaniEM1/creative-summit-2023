import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import { LayoutInImageScreen } from "./LayoutInImageScreen";
import { LayoutCornerReverseCNV } from "./LayoutCornerReverseCNV";
import { LayoutCornerScroller } from "./LayoutCornerScroller";

export const Demo = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='/in-image-screen'       element={ <LayoutInImageScreen /> }/>
            <Route path='/corner-reverse-cnv'    element={ <LayoutCornerReverseCNV /> }/>
            <Route path='/corner-scroller'       element={ <LayoutCornerScroller /> }/>
            
            <Route path='/*' element={ <Navigate to="/in-image-screen"/> }/>
        </Routes>
    </>
  )
}
