import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { SWContext } from "./context.ts";
import { characters, defaultHero } from "./constants.ts";

export function useHeroCustomHook() {
    const { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }
    }, [heroId, changeHero]);

    return { heroId };
}