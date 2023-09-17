import { Header } from "../../components/Header";
import { WelcomeContainer } from "./WelcomeContainer";
import { StyledBody } from "./style";
import { AboutMe } from "./AboutMe/index";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { HardSkills } from "./HardSkills";

export const Home = () => {
    return (
        <StyledBody>
            <div>
                <Header />
                <WelcomeContainer />
                <AboutMe />
                <HardSkills />
                <Portfolio />
                <Footer />
            </div>
        </StyledBody>
    );
};
