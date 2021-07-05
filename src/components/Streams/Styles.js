import styled from "styled-components";

export const StreamsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-right: 40px;
    }
`;
