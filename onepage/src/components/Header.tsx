

import { Nav } from "./Nav";
import { ThemeToggle } from "./ThemeToggeler";


export const Header = () => {

    return (
        <div className={`header `}>
            <Nav/>
            <ThemeToggle></ThemeToggle>
        </div>
    )
}