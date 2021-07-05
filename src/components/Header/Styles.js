import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    height: fit-content;
    padding: 10px 10px 0 10px;
    height: 60px;
`;

export const Logo = styled.div`
    color: white;
    font-size: 32px;
    padding: 5px;
    cursor: pointer;
    margin-left: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const Typography = styled.p`
    color: white;
    font-size: 24px;
    padding: 5px;
    height: 32px;
    cursor: pointer;
    text-align: center;
    margin-right: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 768px) {
        font-size: 16px;
        margin-right: 5px;
        height: 24px;
    }
    :hover {
        color: lightgray;
        transition: 200ms;
    }
`;
