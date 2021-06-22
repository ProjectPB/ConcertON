import React from "react";
import styled from "styled-components";
import Countdown, { zeroPad } from "react-countdown";

function CountdownTimer({ date }) {
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <ItemContainer>
                <Item>
                    <Time>{zeroPad(days)}</Time>
                    <Typography>days</Typography>
                </Item>
                <Item>
                    <Time>{zeroPad(hours)}</Time>
                    <Typography>hours</Typography>
                </Item>
                <Item>
                    <Time>{zeroPad(minutes)}</Time>
                    <Typography>minutes</Typography>
                </Item>
                <Item>
                    <Time>{zeroPad(seconds)}</Time>
                    <Typography>seconds</Typography>
                </Item>
            </ItemContainer>
        );
    };

    return (
        <CountdownTimerContainer>
            <Countdown date={date} renderer={renderer} />
        </CountdownTimerContainer>
    );
}

const CountdownTimerContainer = styled.div`
    width: 100%;
`;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 15px 5px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    @media (max-width: 1200px) {
        height: 50px;
        width: 50px;
    }
`;

const Time = styled.h3`
    color: white;
    font-size: 40px;
    @media (max-width: 1200px) {
        font-size: 20px;
    }
`;
const Typography = styled.p`
    color: white;
    font-size: 16px;
    @media (max-width: 1200px) {
        font-size: 8px;
    }
`;

export default CountdownTimer;
