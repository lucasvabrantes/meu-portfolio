import {
    ContactsContainer,
    EmailContainer,
    StyledLink,
    StyledWelcomeText,
    WelcomeSection,
} from "./style";
import git from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import telegram from "../../../assets/telegramIcon.png";
import Me from "../../../assets/me.png";

export const WelcomeContainer = () => {
    return (
        <WelcomeSection>
            <ContactsContainer>
                <StyledLink>
                    <img src={git} id="git" alt="link para o github" />
                </StyledLink>
                <StyledLink>
                    <img
                        src={linkedin}
                        id="linkedin"
                        alt="link para o linkedin"
                    />
                </StyledLink>
                <StyledLink>
                    <img
                        src={telegram}
                        id="telegram"
                        alt="link para o telegram"
                    />
                </StyledLink>
                <div className="line"></div>
            </ContactsContainer>
            <div className="welcomeTextAndPhoto">
                <div>
                    <StyledWelcomeText>
                        Oi, Me chamo&nbsp;<p>Lucas</p>
                        <p>Sou Desenvolvedor Web</p>
                    </StyledWelcomeText>

                    <figure>
                        <img
                            src={Me}
                            alt="Lucas Abrantes terminando o passeio no Museu do Amanhã(RJ). Ao fundo, pode-se ver um saxofonista tocando num lindo por sol."
                        />
                    </figure>
                    <EmailContainer>
                        <p>lucasabrts@icloud.com</p>
                        <div className="line"></div>
                    </EmailContainer>
                </div>

                <div className="brieflyContainer">
                    <p>
                        Eu sou um desenvolvedor Front End formado pela Kenzie
                        Academy Brasil. Atualmente estudando backend com Node.js
                    </p>
                    <button className="contactMe">Contate me</button>
                </div>
            </div>
        </WelcomeSection>
    );
};
