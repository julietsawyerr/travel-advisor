import styled from "styled-components/macro";
//import {LocationPin} from '@styled-icons/entypo/LocationPin'
 import {Phone} from '@styled-icons/boxicons-solid/Phone'
import {Web} from '@styled-icons/foundation/Web'
import {Email} from '@styled-icons/entypo/Email'
import {Location} from '@styled-icons/zondicons/Location'


export const Container = styled.div`
display: flex;
flex-direction:column;
//   flex-wrap: wrap;
  height:400px;
  list-style: none;
  border-radius:10px;
  margin: 0;
  padding: 0;
  background-color: white;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
//   border:1px solid gray;
`;

export const Media = styled.div`
    width:100%;
    height:160px;
    border-radius:10px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius:10px 10px 0px 0px;
    object-fit: cover;
`;   

export const Content = styled.div`
position: relative;
padding: 16px 24px 32px 32px;
margin: 16px 8px 8px 0;
max-height: 290px;
overflow-y: auto;

&::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-track {
    box-shadow: 0;
    border-radius: 0;
}

&::-webkit-scrollbar-thumb {
    background: #8F5C5C;
    border-radius: 15px;
  }
`;

export const Title = styled.h1`
    position: relative;
    margin: 0 0 24px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    // letter-spacing: 1px;
    color: #8F5C5C;
    

    &::after {
        position: absolute;
        display: block;
        width: 50px;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #8F5C5C;
        content: "";
    }
`;

export const SubTitle = styled(Title)`
    font-size: 16px;
    margin-top:10px;
`;     
  
export const Paragraph = styled.p`
    margin: 0 0 15px;
    font-size: 0.875rem;
    line-height: 1.5;
`;

export const ParagraphRight = styled(Paragraph)`
    text-align:right;
`;

// export const Location = styled(LocationPin)``;
export const LocationPin = styled(Location)``;
export const Mobile = styled(Phone)``;
export const Website = styled(Web)``;
export const Mail = styled(Email)``;

export const Cont = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: flex-start;
    gap:30px;

    ${LocationPin}, ${Mobile}, ${Website}{
        width:1.2rem !important;
        color: #8F5C5C;
    }

    ${Mail}{
        width:0.85rem !important;
        color: #8F5C5C;
        margin-right:50px;
    }

`;


export const Cuisine = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:10px;

    span{
        background:#8F5C5C;
        border-radius: 100px;
         color:white;
        //  font-weight:bold;
        font-size: 0.875rem;
        line-height: 1.5;
        padding:5px 15px;
        
    }
`;

export const Hr = styled.hr`
    margin: 24px auto;
    width: 50px;
    border-top: 2px solid #8F5C5C;
`;

export const Button = styled.button`
    cursor:pointer;
    border:none;
    outline:none;
    text-decoration:underline;
    font-size:0.875rem;
    background:transparent;
    text-align:right;
`;

