import styled from "styled-components";

export const ListaTechs = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 90%;
    height: 900px;
    background-color: #fff;
    border-radius: 4px;
    margin: 20px auto;
    align-items: center;
    padding-inline-start: 0px;
    overflow-y: auto;
`


export const Lista = styled.li`
display: flex;
justify-content: space-between;
background-color: #fff;
width: 90%;
padding: 5px;
margin: 10px 0px;
.info{
    display: flex;
    align-items: center;
    max-width: 140px;
    justify-content: space-between;
}
span{
    color: #000;
}
button{
    background-color: blue;
    border: none;
    cursor: pointer;
}
@media(max-width:360px){
    h2{
        font-size: 16px;
    }
    span{
        font-size: 14px;
       
    }
}
@media(max-width:660px){
    .info{
        width: auto;
    }
    button{
        display: none;
    }
}
`
