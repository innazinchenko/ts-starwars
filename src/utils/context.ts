import {SWContextValue} from "./types";
import {defaultHero} from "./constants.ts";
import {createContext} from "react";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero)
});