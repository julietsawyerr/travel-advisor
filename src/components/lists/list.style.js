import styled from "styled-components/macro";
import {device} from '../../device';

export const Container = styled.div`
    transform:translateY(80px);
    width:85%;
    margin:0 auto;
    // border:1px solid black;
`;

export const GridContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width:100%;
    padding:0px 0 30px;
    margin-top: 40px;

    @media ${device.tablet}{
        // grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));
    }

    @media ${device.laptopXL}{
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }

    @media ${device.desktop}{
        grid-column-gap: 50px;
    grid-row-gap: 50px;
    }
`;

export const Heading = styled.h1`
    font-size: 35px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.3em;
    padding-bottom: 15px;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:rgb(104,69,69);

    span {
        font-size: 13px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 4px;
        line-height: 2.5em;
        padding-left: 0.25em;
        color: rgba(0, 0, 0, 0.8);
        padding-bottom: 10px;


        &:before {
            content: "";
            position: absolute;
            left: 50%;
            transform:translateX(-50%);
            bottom: 0;
            height: 5px;
            width: 55px;
            background-color: #684545;
          }
          &:after {
            content: "";
            position: absolute;
            left: 50%;
            transform:translateX(-50%);
            bottom: 2px;
            height: 1px;
            width: 95%;
            max-width: 255px;
            background-color: #684545;
          }
      }

      @media ${device.tablet}{
        font-size: 30px;
        font-weight: 400;

        span{
            font-size: 11px;
            line-height: 2.3em;
        }
    }
`;

export const HeadingTwo = styled(Heading)`
    margin: 20px 0;
    span{
        &:before,
        &:after  {display:none}
`;

export const Tagline = styled.p`
    font-size:1.1rem;
    text-align:center;
`;


export const DivCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%
    padding:50px 0;

    img{
        width:40%;
        margin:0 auto;

        @media ${device.mobileL}{width:80%}
    }

`;


