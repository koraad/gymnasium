
import styled from 'styled-components';


export const Btn = styled.button`
    background-color: ${props => props.bgColor};
    width: 220px;
    color: ${props => props.color};
    border: 2px solid white;
    padding: 15px 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 12px;
    transition: 0.3s ease-in;
    font-weight: ${props => props.weight};

    &:hover {
      background-color: ${props => props.hoverColor};
      border: 2px solid ${props => props.hoverColor};
    }
`;

