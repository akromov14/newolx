import styled from "styled-components";

const colors = {
    dark: "#002F34",
    light: "rgb(236, 234, 255)"
}

const FooterWrapperr = styled.footer`
    transition: 0.5s;
    &.light{
        background-color: ${colors.light};
        h3{
            color: ${colors.dark} !important;
        }
        button {
            color: ${colors.dark} !important;
            
        }
    }
    &.dark{
        background-color: ${colors.dark};
        a{
            color: ${colors.light} !important;
        }
        button {
            color: ${colors.light} !important;
           
        }
    }
   
`;



export default FooterWrapperr;
