import { Header } from "../../components/Header";
import { WelcomeContainer } from "./WelcomeContainer";
import { StyledBody } from "./style";
import { AboutMe } from "./AboutMe/index";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { HardSkills } from "./HardSkills";
import { useState } from "react";

export const Home = () => {
    const [colorChange, setColorChange] = useState<boolean>(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 60) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <StyledBody>
            <div>
                <Header colorChange={colorChange} />
                <WelcomeContainer />
                <AboutMe />
                <HardSkills />
                <Portfolio />
                <Footer />
            </div>
        </StyledBody>
    );
};
