import styled from "styled-components";

export const Button = styled.button`
    color: #fff;
    font-size: 20px;
     background: ${props => props.theme === 'primary' ? 'linear-gradient(to bottom, #fe7e5d, #db8b95ff)' : 'transparent'};
     padding: 15px 30px;
     border: ${props => props.theme === 'primary' ? 'none' : '2px solid #b1b1b1ff'};
     border-radius: 25px;
     width: fit-content;
    cursor: pointer;

    &:hover {
        opacity: ${ props => props.theme === 'primary' ? '0.8' : '0.6'};
    }
        &active {
        opacity: 0.6;
    }
`