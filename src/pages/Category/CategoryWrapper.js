import styled from "styled-components";

const colors = {
    dark: "#002F34",
    light: "rgb(236, 234, 255)"
}

const CategoryWrapper = styled.header`
    transition: 0.5s;
   
    &.light{
        background-color: ${colors.light};
        p, span{
            color: ${colors.dark} !important;
        }
     
    }
    &.dark{
        background-color: ${colors.dark};
        p, span, h1{
            color: ${colors.light} !important;
        }
     
    }
    .price1 {
     margin-left: 250px;
     font-weight: bold;
 }
 
 .location {
     margin-top: 50px;
 }
 img {
     
     object-fit: cover;
     transition: 0.7s;

     &:hover{
            transform: scale(1.1);
         }
 }
    .product {
            display: flex;
            width: 900px;
            transition: 0.7s;

            &:hover{
            transform: scale(1.1);
         }
     }
     .text1 {
     padding: 10px 0 0 30px;
    }
    .title1 {
     width: 300px;
     font-weight: bold;
 }

`;

export default CategoryWrapper;
