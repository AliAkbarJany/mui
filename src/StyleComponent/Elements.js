import styled from 'styled-components'

export const Tag = styled.span`
    display: inline-block;
    /* color: #fff; */
    color: ${(props)=> props.text_color};
    /* background:#4361ee; */
    background:${(props)=> props.background_color};
    margin-bottom:10px;
    /* margin-top:10px; */
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 0.7em;
    
`

export const H1 = styled.h1`
    color: rebeccapurple;
`
export const P =styled.p`
    width: 280px;
    font-size:12px;
    line-height: 1.4;
    color: brown;
    margin: 20px 0;
`



