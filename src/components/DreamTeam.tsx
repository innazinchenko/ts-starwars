import Friend from "./Friend.jsx";
import {friends} from "../utils/constants.js";
import {useHeroCustomHook} from "../utils/useHeroCustomHook.ts";



const DreamTeam = () => {
    const { heroId } = useHeroCustomHook();
    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream Team</h2>
            {friends.filter(friend => friend !== heroId).map((friend, i) => <Friend friend={friend} pos={i + 1} key={i} />)}
        </section>
    );
};

export default DreamTeam;