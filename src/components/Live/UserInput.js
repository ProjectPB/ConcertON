import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/userSlice";

function UserInput() {
    const [userInput, setUserInput] = useState("");
    const dispatch = useDispatch();

    const createUsername = (e) => {
        e.preventDefault();

        const trimmedInput = userInput.trim();

        if (trimmedInput.match(/^.{4,12}$/g)) {
            dispatch(setUsername(trimmedInput));
        } else {
            return alert("Username must have between 4 and 12 characters");
        }
    };

    return (
        <UserInputContainer>
            <Typography>
                Please provide a username to send a message (4-12 characters)
            </Typography>
            <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <Button onClick={createUsername}>Set username</Button>
        </UserInputContainer>
    );
}

const UserInputContainer = styled.form`
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
const Typography = styled.h3`
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    padding: 5px;
`;
const Input = styled.input`
    border: 1px solid;
    outline: none;
    padding: 5px;
`;
const Button = styled.button`
    padding: 5px;
    margin-top: 2px;
    border: 1px solid black;
    cursor: pointer;
`;

export default UserInput;
