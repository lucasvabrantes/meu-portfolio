import styled from "styled-components";

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://dsm01pap006files.storage.live.com/y4mvM2NYJhbA4TbrZVHrzIKpPn-DZQLKJEZ0h7f_2tvaWHJMGJPLQ3-TUIR1B1OB_pyhVGNiP-xdtCskTEAD4beuO9W_mDp72OH-TBpmpqC7A_iCF-6ycxmxAdQseXs_YVyDlBPU_996oCuw6p93wZAxwkUSw1fsTpQ4ywy3KwSNkc5uFtQYCGwMnbGJXtVt5uneEJZOtSD7NXtVu9s3AqgcNrJrKgkAYtHVbOuzkkqgRQ?encodeFailures=1&width=305&height=305");
    background-repeat: repeat;
    background-position: center;
    width: 100%;
    position: relative;

    div-first:child {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-direction: column;
        width: 100%;
        max-width: 900px;
    }

    .scrollHide {
        background: rgba(34, 184, 207, 0.35);
    }

    .numberChange {
        color: var(--orange-100);
        filter: brightness(0.8);
    }
`;
