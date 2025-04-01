import {base_url, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";
import {HeroInfo} from "../utils/types";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();

    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero")!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
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
                    localStorage.setItem("hero", JSON.stringify({
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
                    {Object.entries(hero).map(([key, value]) => (
                        <p key={key}>
                            <span className="display-3"> {key}:</span> {value}
                        </p>
                    ))}
                </div>
            }
        </>
    );
};

export default AboutMe;