import {characters, defaultHero} from "../utils/constants.ts";
import {useNavigate, useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";

const Home = () => {
    let {heroId = defaultHero} = useParams();
    const{changeHero} = useContext(SWContext);
    const redirect = useNavigate();



    useEffect(() => {
        if(!characters[heroId] || !heroId ){
            redirect('error');
        }
        changeHero(heroId);
    }, [heroId, redirect, changeHero]);
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;