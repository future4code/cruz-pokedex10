import styled from 'styled-components'

export const Button = styled.button`
    height: 40px;
    box-shadow: 2px 2px 10px grey;
    border: 5px solid white;
    background-color: #edede6;
    font-weight: 600;
    font-size: 11px;
    color: #030ba6;
    cursor: pointer;
    text-transform: uppercase;

    :hover {
        background-color: #373ca6;
        color: #f2c230;
        border: 5px solid #d99f6c;
        transition: 0.2s;
    }
`