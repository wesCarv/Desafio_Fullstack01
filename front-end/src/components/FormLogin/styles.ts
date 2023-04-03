import styled from "styled-components";

export const Global = styled.div`
    background-color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const H2 = styled.h2`
    color: #000;
`

export const Forms = styled.form`
    max-width: 369px;
    width: 90%;
    max-height: 400px;
    height: 500px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #d3d3d3;

    span {
        margin: 0 auto;
        font-size: 12px;
        color: #000;
      }
      
`
export const InputLogin = styled.input`
    border: none;
    background-color: #fff;
    color: #000;
    height: 34px;
    width: 90%;
    margin: 0 auto;
    border-radius: 4px;
`

export const BtnLogin = styled.button`
    width: 90%;
    margin: 0 auto;
    border: none;
    background-color: blue;
    color: #000;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
`

export const BtnCadastro = styled.button`
    width: 90%;
    margin: 0 auto;
    border: none;
    background-color: blue;
    color: #000;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
`