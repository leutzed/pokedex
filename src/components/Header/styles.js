import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${props => props.theme.colors.header};
    width: 100%;
    height: 75px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const LogoImage  = styled.Image`
    align-self: center;
    margin-top: 15px;
`;