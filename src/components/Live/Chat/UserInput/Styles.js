import styled from "styled-components";

export const UserInputContainer = styled.form`
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border: 1px solid darkblue;
    justify-content: flex-end;
    padding: 5px;
    border-radius: 5px;
`;

export const Typography = styled.h3`
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    padding: 5px;
`;

export const Input = styled.input`
    border: 1px solid;
    outline: none;
    padding: 5px;
`;

export const Button = styled.button`
    padding: 5px;
    margin-top: 2px;
    border: 1px solid black;
    border-radius: 2.5px;
    cursor: pointer;
    color: whitesmoke;
    background-color: darkblue;
    :hover {
        background-color: blue;
        transition: 2   00ms ease-in-out;
    }
`;