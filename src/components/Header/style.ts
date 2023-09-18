import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 35px 0px;
    width: 100%;
    max-width: 900px;
    display: flex;
    background: transparent;
    backdrop-filter: blur(5px);
    justify-content: flex-end;
    border: 1.5px solid var(--grey-300);
    border-bottom: none;
    border-top: none;
    position: fixed;
    z-index: 99;
    transition: 0.8s;
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: transparent;
    width: 100%;
    padding: 0px 15px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 210px;
        height: 30px;
        cursor: pointer;

        span {
            font-size: clamp(0.625rem, 1rem, 1rem);
            color: var(--cyan-500);
            font-family: var(--font-family);
        }

        p {
            font-size: 1rem;
            color: var(--grey-300);
            font-family: var(--font-family);
        }
    }
`;
