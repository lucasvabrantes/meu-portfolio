import { Header } from "../../components/Header";
import { WelcomeContainer } from "./WelcomeContainer";
import { StyledBody } from "./style";
import { AboutMe } from "./AboutMe/index";
import { Footer } from "./Footer";

export const Home = () => {
    return (
        <StyledBody>
            <div>
                <Header />
                <WelcomeContainer />
                <AboutMe />
                <Footer />
            </div>
        </StyledBody>
    );
};
