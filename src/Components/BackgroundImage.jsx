import styled from "styled-components";

export const Background = styled.div`
    background-image: url(${props => props.image});
    background-position: ${props => props.position};
    background-attachment: ${props => props.attachment};
    background-repeat: no-repeat;
    background-size: ${props => props.size};
    width: ${props => props.width};
    height: ${props => props.height};
`;

