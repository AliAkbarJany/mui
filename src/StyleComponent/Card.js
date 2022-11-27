
import React from 'react';
import { Link } from 'react-router-dom';
import {H1, P, Tag} from './Elements';

import { ButtonContainer, CardContainer, ContentContainer } from './Style.element';


const Card = () => {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag background_color='lightgreen' text_color="black" >EXCLUSIVE</Tag>
                <H1>React Styled Components</H1>
                <P>
                    Exclusive React Js Tutorial on styled Components Where You will Learn Why we need this and how to use it.
                </P>
               <ButtonContainer>
                    
                   <a href="https://www.facebook.com/">facebook</a>
                   <a href="https://www.youtube.com/">YouTube</a>
                    
               </ButtonContainer>
               <button class="btn btn-warning"><a href="https://www.youtube.com/">YouTube</a></button>
            </ContentContainer>
        </CardContainer>
    );
};

export default Card;