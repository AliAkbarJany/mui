import React from 'react';
import styled from 'styled-components'

const StyleComponents = () => {

    const Button = styled.button`
            background:  ;
            border-radius: 3px;
            border: 2px solid palevioletred;
            color: palevioletred;
            margin: 0 1em;
            padding: 0.25em 1em;
            
    
    `
    const Container = styled.div`
            text-align: center;
            text-decoration: line-through;
            
            `
    const Wrapper = styled.section`
        
        border: 2px solid yellowgreen;
        border-width: 20px;
        padding:15px;
        width: 200px;
        
        display: inline-block;
   
    


        .btn{
            background-color: darksalmon;
        }

        h1{
            font-size: larger;
            text-decoration: dotted;
            font-weight: 600;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    
    `
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Welcome to STYLE component</h1>
            <div className='my-5'>
                <button className='btn btn-accent'>Subscribe Button</button>
            </div>
            <Container>
                <Button >Scan Now</Button>
                <p>rafsan jany</p>
            </Container>

            <Wrapper className='my-7 '>
                <div>
                    <button className='btn '> Button</button>
                    <h1>
                        ali akbar hashami rafsanjany talukder
                    </h1>
                </div>

            </Wrapper>

            <div className='text-3xl font-bold flex justify-end my-9'>
                <p>hello everyone</p>
            </div>



        </div>
    );
};

export default StyleComponents;