import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {characters} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import {useHeroCustomHook} from "../utils/useHeroCustomHook.ts";

const Home = () => {

    const { heroId } = useHeroCustomHook();

    return characters[heroId] ? (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;