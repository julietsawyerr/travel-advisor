import styled from "styled-components/macro";
import {Planet} from '@styled-icons/ionicons-sharp/Planet'
 
export const Container = styled.div`
    width: 100%;
    height:200px;
    display:flex;
    flex-direction:column;
    gap:5px;
    justify-content:center;
    align-items:center;
    padding-top:30px;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.3) 100%
    ),
    

    url('images/bg7.jpg');
        background-position: right top;
        background-repeat: no-repeat;
        background-size:cover;

        @media only screen and (max-width: 600px) {
            height:340px;
          }
 `;


export const Cont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   width:85%;
   padding:20px;
   margin:0 auto;
   background:#251B1B;
   border-radius:5px;
   transform:translateY(40px);
   box-sizing:border-box;
   outline:10px solid rgba(0, 0, 0, 0.60);
//    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
//    background:#FAF9F6;
    

@media only screen and (max-width: 600px) {
    transform:translateY(40px);
    width:100%;
    border-radius:0px;
    padding:30px;
    outline:0px solid rgba(0, 0, 0, 0.60);
    border-bottom:10px solid rgba(0, 0, 0, 0.60);
    border-top:10px solid rgba(0, 0, 0, 0.60);
  }
   
`;



export const Logo = styled(Planet)`
    width:60px;
    color:white;
    padding-right:10px;  
`;

export const Title=styled.h1`
    display:flex;
    justify-content:center;
    align-items:center;
    height:60px;
    font-family:var( --font-family-carter);
    color:white;
    transform:translateY(40px);
    font-size:45px;
    font-weight:400;
    // mix-blend-mode: multiply;
//   text-shadow: 5px 4px 11px rgb(0,0,0), 0 2px 5px rgb(0,0,0);
//   text-align: center;
    text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);


`;

export const Tagline = styled.p`
    font-size:1rem;
    font-family:var( --font-family-lato);
    text-transform:capitalize;
    // color:#B6B6B4;
    color:#666362;
`;


export const FormCont = styled.form`
   display:flex;
    width:100%;
    gap:10px;
    // margin-top:20px;

    @media only screen and (max-width: 600px) {
        flex-direction:column;
      }
`;

export const InputCont = styled.div`
    position:relative;
    width:100%;

    span{
        color:red;
        font-size:12px;
        padding-top:5px;
    }
`;

export const InputField = styled.input`
    width:100%;
    height:50px;
    padding:10px;
    background:#4E3838;
    outline:none;
    border:none;
    // border:2px solid #35393510;
    border-radius:5px;
    font-size:1.2rem;
    color:#FAF9F6;
    
`;

export const Option = styled.option`
    height:40px;
    font-size: 1.2rem;
    margin: 20px !important;
`;

export const Half= styled.div`
    display:flex;
    gap:10px;
    margin-top:10px;
`;