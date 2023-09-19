import { Header } from "../../components/Header";
import { WelcomeContainer } from "./WelcomeContainer";
import { StyledBody } from "./style";
import { AboutMe } from "./AboutMe/index";
import { Footer } from "../../components/Footer";
import { Portfolio } from "./Portfolio";
import { HardSkills } from "./HardSkills";
import { useState } from "react";
import { Contact } from "./Contact";

export const Home = () => {
    const [colorChange, setColorChange] = useState<boolean>(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 70) {
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
                <Contact />
                <Footer />
            </div>
        </StyledBody>
    );
};
