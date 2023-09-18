import { StyledHeader, StyledNav } from "./style";

type THeaderProps = {
    colorChange: boolean;
};

export const Header = ({ colorChange }: THeaderProps) => {
    return (
        <StyledHeader className={colorChange ? "scrollHide" : ""}>
            <StyledNav>
                <button>
                    <span className={colorChange ? "numberChange" : ""}>
                        01. &nbsp;
                    </span>
                    <p> &lt;about&gt;</p>
                </button>
                <button>
                    <span className={colorChange ? "numberChange" : ""}>
                        02. &nbsp;
                    </span>
                    <p> &lt;skills&gt; </p>
                </button>
                <button>
                    <span className={colorChange ? "numberChange" : ""}>
                        03. &nbsp;
                    </span>
                    <p> &lt;portfolio&gt; </p>
                </button>
                <button>
                    <span className={colorChange ? "numberChange" : ""}>
                        04. &nbsp;
                    </span>
                    <p> &lt;contato&gt; </p>
                </button>
            </StyledNav>
        </StyledHeader>
    );
};
