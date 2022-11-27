import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: darksalmon;
    width:100%;
    height:100vh;

`

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: lightcoral;
    height: 450px;
    width: 650px;
    overflow: hidden;


`
export const ContentContainer = styled.div`
    position: absolute;
    background-color: whitesmoke;
    width: 285px;
    /* width: 115px; */
    left: 20px;
    z-index: 3;
`

export const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-top: 10px;


    /* ..... aikhane (ButtonContainer)= (buttons)....... */

    /* .buttons a */
    & a {
        display: inline-block;
        overflow: hidden;
        position: relative;
        font-size: 12px;
        color: black;
        text-decoration: overline;
        padding: 10px 15px;
        border: 2px solid red;
        font-weight: bold;


        /* .buttons a:after */
        &:after{
                content: '';
                position: absolute;
                top: 0;
                right: -10px;
                width: 0%;
                background: lightgreen;
                height: 100%;
                z-index:-1;
                transition: width 0.3s ease-in-out;
                transform: skew(-25deg);
                transform-origin:right;
        }

        /* .buttons a:hover */
        &:hover{
            color: red;
            transform: all 0.5s ease;



            /* .buttons a:hover:after  */
            &:after{
                width:150%;
                left: -10px;
                transform-origin:left;
            }
        }
        

        /* .buttons a:nth-of-type(1) */
        &:nth-of-type(1){
            border-radius: 50px 0 0 50px;
            border-right: none;
        }


        /* .buttons a:nth-of-type(2 ) */
        &:nth-of-type(2){
            border-radius: 0 50px 50px 0;
            /* border-right: none; */
        }
    }

`
