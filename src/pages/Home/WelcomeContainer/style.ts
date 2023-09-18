import styled from "styled-components";

export const WelcomeSection = styled.section`
    display: flex;
    padding: 40px 50px 0px;
    width: 100%;
    max-width: 900px;
    background: transparent;
    backdrop-filter: blur(3px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;
    margin-top: 99px;
    position: relative;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }

    .welcomeTextAndPhoto {
        display: flex;
        flex-direction: column;
        width: 100%;

        div:first-child {
            display: flex;
            width: 100%;
            gap: 1rem;

            @media (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-content: center;
            }

            figure {
                margin: 0px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 3px solid var(--cyan-500);
                border-left: 0;
                border-bottom: 0px;
                width: 200px;
                height: 230px;
                padding: 1rem;
                img {
                    width: 200px;
                    height: 200px;
                }
            }
        }
    }

    .brieflyContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 200px;
        gap: 1rem;
        width: 100%;
        max-width: 40vw;
        padding-top: 2rem;
        position: absolute;
        top: 140px;

        @media (max-width: 768px) {
            top: 0px;
            position: relative;
        }
        p {
            max-width: 420px;
            margin: 0rem 1.5rem;
            font-size: 1rem;
            font-weight: 100;
        }

        button {
            background-color: var(--cyan-500);
            color: white;
            border-radius: 3px;
            width: 100px;
            height: 40px;
            margin: 0rem 1.5rem;
            transition: 0.5s;

            &:hover {
                background-color: var(--orange-100);
            }
        }
    }
`;

export const ContactsContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
    align-items: center;
    flex-direction: column;
    height: 400px;

    @media (max-width: 768px) {
        height: 100px;
        flex-direction: row;
        padding-right: 23px;
        padding-left: 35px;
        justify-content: space-between;
    }

    div {
        height: 85px;
        width: 2px;
        background-color: var(--cyan-500);
        align-self: center;
    }
`;

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 30px;
    height: 200px;

    p {
        transform: rotate(270deg);
        color: var(--cyan-900);
        font-size: 1.3rem;
        letter-spacing: 0.9px;
        margin: 92px 0px 0px 30px;
        font-family: "Inconsolata", monospace;
        font-weight: 400;

        @media (max-width: 768px) {
        }
    }

    p:hover {
        filter: brightness(1.3);
    }

    .line {
        height: 20px;
        width: 2px;
        background-color: var(--cyan-500);
    }
`;

export const StyledLink = styled.a`
    img {
        width: 50px;
        height: 50px;
        color: var(--cyan-700);
        transition: 0.5s;
        cursor: pointer;
    }

    #git:hover {
        background: #7950f2;
        filter: brightness(1.1);
        border-radius: 255px;
    }

    #linkedin:hover {
        background: #0b65c2;
        filter: brightness(1.1);
        border-radius: 6px;
    }

    #telegram:hover {
        background: #2aa0d9;
        filter: brightness(1.1);
    }
`;

export const StyledWelcomeText = styled.h1`
    display: flex;
    height: 80px;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 2.3rem;
    text-align: left;
    font-family: var(--font-family);
    color: var(--grey-300);
    font-weight: 700;
    margin: 1rem 0rem 0rem 1.5rem;

    @media (max-width: 867px) {
        font-size: 1.8rem;
    }

    p {
        font-size: 2.3rem;
        font-family: var(--font-family);
        font-weight: 700;
        color: var(--cyan-900);
        margin: 0;

        @media (max-width: 867px) {
            font-size: 1.8rem;
        }
    }
`;
