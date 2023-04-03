import styled from 'styled-components'

export const Global = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    height: 700px;
    justify-content: space-evenly;
    background-color: #d3d3d3;
    border-radius: 4px;

    
    
    label{
        color: #000;
        font-weight: 400;
        width: 90%;
        margin: 0 auto;
    }
    
    h2{
        color: blue;
        margin: 0 auto;
    }
    p{
        color: #000;
        margin: 0 auto;
    }
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
    span {
        margin: 0 auto;
        font-size: 12px;
        color: #000;
      }
`

export const Topo = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 400px;
`

export const Button = styled.button`
    background-color: blue;
    color: #000f;
    height: 40px;
    border: none;
    width: 90%;
    margin: 0 auto;
    cursor: pointer;
`
export const BtnTopo = styled.button`
    background-color: #d3d3d3;
    color: #000;
    border: none;
    width: 80px;
    height: 35px;
    border-radius: 6px;
    cursor: pointer;
`