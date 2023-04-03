import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    display: flex;
    flex-directiumn: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
`

export const Show = styled.div`
    width: 90%;
    max-width: 400px;
    height: 340px;
    background-color: #fff;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15%;
    background-color: blue;
    border-radius: 4px 4px 0px 0px;

    h2{
        color: #fff;
        font-size: 14px;
    }
    button{
        background-color: #000;
        border: none;
        color: #fff;
        cursor: pointer;
    }
`

export const Body = styled.div`
    height: 80%;
`
export const Form = styled.form`
display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    height: 100%;
    max-height: 700px;
    

    input{
        border: none;
        background-color: #fff;
        color: #000;
        height: 34px;
        width: 90%;
        margin: 0 auto;
        border-radius: 4px;
    }
    select{
        border-radius: 4px;
        border: none;
        background-color: #fff;
        color: #000;
        height: 34px;
        width: 90%;
        margin: 0 auto;
    }
    label{
        color: #000;
        font-weight: 400;
        width: 90%;
        margin: 0 auto;
        font-size: 12px;
    }
    button{
        background-color: blue;
        color: #ffff;
        height: 40px;
        border: none;
        width: 90%;
        margin: 0 auto;
        cursor: pointer;
    }
`