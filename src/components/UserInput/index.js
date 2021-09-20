import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/User/user.actions";
import { UserInputContainer, Typography, Input, Button } from "./Styles";

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
        Please provide a username to comment (4-12 characters)
      </Typography>
      <Input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <Button onClick={createUsername}>Set username</Button>
    </UserInputContainer>
  );
}

export default UserInput;
