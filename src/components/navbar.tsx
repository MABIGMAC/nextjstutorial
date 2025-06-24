import Navlinks from "./navlinks";
import NavSearch from "./navsearch";

export default function NavBar() {
    console.log("NavBar component rendered");
    return (<>
        <NavSearch/>
        <Navlinks/>
    </>)
}