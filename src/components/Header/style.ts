import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 50px 13px 30px 0px;
    margin-top: 3rem;
    border-radius: 100px 0px 0px 0px;
    width: 100%;
    display: flex;
    background: transparent;
    backdrop-filter: blur(2px);
    justify-content: center;
    max-width: 970px;
    border: 1.5px solid var(--grey-300);
    border-bottom: none;
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    background: transparent;
    width: 100%;
    padding: 0px 1.2rem 0px 0px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 210px;
        height: 30px;

        span {
            font-size: 1.2rem;
            color: var(--cyan-500);
            font-family: var(--font-family);
        }

        p {
            font-size: 1.2rem;
            color: var(--grey-300);
            font-family: var(--font-family);
        }
    }
`;