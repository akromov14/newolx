import styled from "styled-components";

const colors = {
    dark: "#002F34",
    light: "rgb(236, 234, 255)"
}

const HeaderWrapperr = styled.header`
    transition: 0.5s;
    margin-bottom: 0 !important;
    
   
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
        h3{
            color: ${colors.light} !important;
        }
        button {
            color: ${colors.light} !important;
           
        }
    }
    .nav1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        width: auto !important;
        height: 35px  !important;
    }
   .kunTun{
       display: flex;
       justify-content: center;
   }
   .uzun {
       width: 100px;
   }
`;



// const FooterWrapperr = styled.header`
//     transition: 0.5s;
//     &.light{
//         background-color: ${colors.light};
       
//     }
//     &.dark{
//         background-color: ${colors.dark};
       
//     }
    
// `;



export default HeaderWrapperr;
