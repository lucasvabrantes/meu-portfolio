import styled from "styled-components";

export const WelcomeSection = styled.section`
    display: flex;
    padding: 0px 26px;
    justify-content: space-between;
    height: 580px;
    width: 100%;
    max-width: 970px;
    background: transparent;
    z-index: 0;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    .welcomeTextAndPhoto {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-evenly;

        div:first-child {
            display: flex;
            width: 100%;
            max-height: 150px;

            figure {
                margin: 0px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 3px solid var(--cyan-500);
                border-left: 0;
                border-bottom: 0px;
                width: 260px;
                height: 260px;
                padding: 1rem;
                img {
                    width: 230px;
                    height: 230px;
                }
            }
        }
    }

    .brieflyContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 200px;
        gap: 3rem;

        p {
            width: 450px;
            margin: 0rem 3rem;
            font-size: 1rem;
            font-weight: 100;
        }

        button {
            background-color: var(--cyan-500);
            color: white;
            border-radius: 7px;
            width: 100px;
            height: 50px;
            margin: 0rem 3rem;
            transition: 0.5s;

            &:hover {
                filter: brightness(1.1);
            }
        }
    }
`;

export const ContactsContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    height: 484px;
    width: 60px;
    margin-top: 4rem;

    div {
        height: 150px;
        width: 2px;
        background-color: var(--cyan-500);
        align-self: center;
    }
`;

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 50px;
    height: 435px;
    padding-top: 100px;

    p {
        transform: rotate(270deg);
        color: var(--cyan-900);
        font-size: 1.4rem;
        letter-spacing: 1px;
        margin: 19px 0px 0px 0px;
        font-family: "Inconsolata", monospace;
    }

    p:hover {
        filter: brightness(1.3);
    }

    .line {
        height: 150px;
        width: 2px;
        background-color: var(--cyan-500);
    }
`;

export const StyledLink = styled.a`
    img {
        width: 50px;
        height: 50px;
        color: var(--cyan-700);
    }
`;

export const StyledWelcomeText = styled.h1`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 2.3rem;
    text-align: left;
    font-family: var(--font-family);
    color: var(--grey-300);
    font-weight: 700;
    margin: 1rem 0rem 0rem 3rem;

    p {
        font-size: 2.3rem;
        font-family: var(--font-family);
        font-weight: 700;
        color: var(--cyan-900);
        margin: 0;
    }
`;
