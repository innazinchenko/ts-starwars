import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import AboutMe from "./AboutMe.tsx";
import Home from "./Home.tsx";
import StarWars from "./StarWars.tsx";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

const Main = () => {

const {page} = useContext(SWContext);
    switch (page) {
        case navItems[1]:
            return <AboutMe/>
        case navItems[2]:
            return <Contact/>
        case navItems[3]:
            return <StarWars/>
        default:
            return <Home/>
    }
}

export default Main;