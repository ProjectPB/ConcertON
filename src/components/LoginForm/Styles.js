import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form``;

export const FormBody = styled.div`
  margin-bottom: 15px;
`;

export const ErrorsContainer = styled.ul`
  list-style-type: none;
  color: #cc3300;
  margin: 10px 0;
`;

export const Error = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Typography = styled.p`
  margin-left: 5px;
`;
