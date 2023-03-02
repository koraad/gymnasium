import '../index.css'
import styled from 'styled-components';


export const Heading = styled.h1`
    

    color: var(--primary-color);
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 900;
    font-style: italic;
    position: relative;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        border: 1px solid grey;
    }
   
`;


