import styled from "styled-components";

export const Container = styled.View`
    width: 90%;
    margin: 15px;
    padding: 0 16px;
    background-color: ${props => props.theme.colors.background};
    border-radius: 20px;
    height: 40px;
    border: 1px solid ${props => props.theme.colors.border};
    flex-direction: row;
    align-items: center;
`;

export const InputText = styled.TextInput`
    font-size: 16px;
    flex: 1;
    padding-left: 16px;
`;