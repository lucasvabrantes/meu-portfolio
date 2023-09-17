import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    gap: 2rem;
    justify-content: space-between;
    height: 350px;
    width: 100%;
    max-width: 970px;
    background: transparent;
    backdrop-filter: blur(2px);
    border: 1.5px solid var(--grey-300);
    border-top: none;
    border-bottom: none;

    .aboutMeHeader {
        width: 100;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
