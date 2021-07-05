import styled from "styled-components";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex: 0.25;
    padding: 5px;
    background-color: white;
    overflow: hidden;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: 10px;
    @media (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 10px;
        max-width: 600px;
        flex: 1;
    }
`;
export const Header = styled.h1`
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid darkblue;
    padding: 5px;
    margin-bottom: -3px;
`;

export const Messages = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 5px 0 5px 0;
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    > * {
        &:first-child {
            margin-top: auto !important;
        }
    }
`;

export const MessagesBottomRef = styled.div``;

export const MoreIcon = styled(UnfoldMoreIcon)`
    padding: 5px;
    margin: 0 auto;
    margin-top: 5px;
    color: darkblue;
    background-color: whitesmoke;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid;
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid darkblue;
    justify-content: flex-end;
    padding: 5px;
    border-radius: 5px;
`;

export const Input = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
`;

export const InputBottomContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const TextLength = styled.p`
    margin-right: 5px;
    font-size: 12px;
    font-weight: 400;
`;
