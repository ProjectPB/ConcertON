import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import {
    CountdownTimerContainer,
    ItemContainer,
    Item,
    Time,
    Typography,
} from "./Styles";

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

export default CountdownTimer;
