import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {HeroInfo} from "../utils/types";
import {useNavigate, useParams} from "react-router";
import {SWContext} from "../utils/context.ts";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    let {heroId = defaultHero} = useParams();
    const{changeHero} = useContext(SWContext);
    const redirect = useNavigate();

    useEffect(() => {
        if(!characters[heroId] || !heroId){
            redirect('error');
        }
        changeHero(heroId);
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [])

    return (
        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span className={'display-3'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                    </p>)}
                </div>
            }
        </>
    );
};

export default AboutMe;