import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import {useNavigate, useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
const StarWars = () => {

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
        <div>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;