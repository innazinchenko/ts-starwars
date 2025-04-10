import {characters, starWarsInfo} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import {useHeroCustomHook} from "../utils/useHeroCustomHook.ts";

const StarWars = () => {

    const { heroId } = useHeroCustomHook();

    return characters[heroId] ? (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    ) : <ErrorPage/>;
};

export default StarWars;