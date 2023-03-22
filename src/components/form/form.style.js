import styled from 'styled-components/macro'

export const Container = styled.div`
    // display:flex;
    // // flex-direction:column;
    // justify-content:left;
    // align-items:center;
    height:100%;
    width:100%;
    margin-top:50px;
    
`;

export const Heading = styled.h1`
    font-size:30px;
    text-transform: capitalize;
    font-family:var(--font-family-nunito);
    color:#FAF9F6;
`;


export const FormCont = styled.form`
    width:100%;
    margin-top:20px;
`;

export const InputField = styled.input`
    width:100%;
    height:40px;
    padding:10px;
    background:#FAF9F6;
    outline:none;
    border:none;
`;

export const Half= styled.div`
    display:flex;
    gap:10px;
    margin-top:10px;
`;