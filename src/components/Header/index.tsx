import { StyledHeader, StyledNav } from "./style";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <button>
                    <span>01. &nbsp;</span>
                    <p> &lt; about &gt;</p>
                </button>
                <button>
                    <span>02. &nbsp;</span>
                    <p> &lt; skills &gt; </p>
                </button>
                <button>
                    <span>03. &nbsp;</span>
                    <p> &lt; portfolio &gt; </p>
                </button>
                <button>
                    <span>04. &nbsp;</span>
                    <p> &lt; contato &gt; </p>
                </button>
            </StyledNav>
        </StyledHeader>
    );
};
