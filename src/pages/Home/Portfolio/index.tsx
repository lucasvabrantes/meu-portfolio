import { useEffect, useState } from "react";
import { StyledParagraphOne, StyledTitle } from "../../../styles/typography";
import { StyledSection } from "./style";
import { api } from "../../../services/api";

export const Portfolio = () => {
    const [repos, setRepos] = useState(null);

    const getRepos = async () => {
        try {
            const { data } = await api.get("");
            setRepos(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRepos();
    }, []);
    return (
        <StyledSection>
            <div className="portfolioHeader">
                <StyledTitle textColor="cyan">03.</StyledTitle>
                <StyledTitle textColor="grey">Portfólio</StyledTitle>
            </div>
            <div>
                <StyledParagraphOne>
                    Abaixo deixo alguns projetos que desenvolvi durante meu
                    processo de estudo, bem como projetos independentes. Em
                    todos aplico os conceitos e princípios inerentes as boas
                    práticas de programação:
                </StyledParagraphOne>
                <ul>
                    <li>
                        <img src="" alt="" />
                        <p className="repoName"></p>
                    </li>
                </ul>
            </div>
        </StyledSection>
    );
};
