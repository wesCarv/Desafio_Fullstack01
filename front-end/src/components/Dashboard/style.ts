import styled from "styled-components";

export const Dashb = styled.div`
    background-color: #fff;
    height: 150vh;
`

export const Header = styled.header`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
`

export const BtnHeader = styled.button`
    width: 50px;
    height: 35px;
    border: none;
    border-radius: 4px;
    background-color: blue;
    color: #fff;
    cursor: pointer;
    button {
        height: 33px;
        width: 150px;
        background-color: blue;
        color: #fff;
        border-radius: 4px;
        border: none;
        cursor: pointer;
    }
`

export const DivMain = styled.div`
    height: 50%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

`

export const DivInfo = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .h2__name{
        margin: none;
        color: #000;
    }
    span{
        color: #000;
    }
    @media(max-width: 425px){
        .h2__name{
            font-size: 18px;
        }
        span{
            font-size: 14px;
        }
    }
`



export const Main = styled.main`
    display:flex;
    flex-direction: column;
    h2{
        color: #000;
    }
    p{
        color: #000;
    }
    
`
export const AddCtt = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h2{
        font-size: 18px;
    }
    button{
        height: 33px;
        width: 150px;
        background-color: blue;
        color: #fff;
        border-radius: 4px;
        border: none;
        cursor: pointer;
    }
`
