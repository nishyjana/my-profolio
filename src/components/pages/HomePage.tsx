import React from "react";
import { ABOUT_ME, CONSULTANCE, CONTACT_ME } from "../constants/NavIndex";
import NavBar from "../molecule/NavBar";

export default function HomePage(){
    const navProps = [ABOUT_ME , CONTACT_ME, CONSULTANCE]
    return(
        <div className="w-full h-screen">
            <NavBar navProps={navProps}/>
        </div>
    )
}