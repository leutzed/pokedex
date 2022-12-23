import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    flex-direction: row;
    margin: 10px;
`;

export const CardComponent = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: ${props => props.theme.colors.backgroundCard[`${props.type}`]};
    height: 190px;
    border-radius: 15px;
    width: 100%;
`;

export const Top = styled.View`
    align-self: center;
    align-items: center;
    height: 18px;
    background-color: #FFCB05;
    border-radius: 10px;
    margin-top: -10px;
    width: 25%;
    justify-content: center;
`;

export const IndexNumber = styled.Text`
    color: #21386E;
`;

export const Middle = styled.View`
    flex: 1;
    align-items: center;
`;

export const BackgroundCircle = styled.View`
    background-color: #9DFAE47A;
    height: 100px;
    width: 100px;
    margin-top: 14px;
    border-radius: 100px;
    padding: 0;
`;

export const PokemonImage = styled.Image`
    margin-top: 10px;
    width: 93px;
    height: 93px;
`;

export const Bottom = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 60px;
`;

export const PokemonName = styled.Text`
    color: #FFFFFF;
    line-height: 21px;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
`;

export const PokemonDetails = styled.View`
    flex-direction: row;
    margin-top: 5px;
`;
export const PokemonTypeBox = styled.View`
    background-color: ${props => props.theme.colors.boxType[`${props.type}`]};
    border-radius: 20px;
    padding: 3px 10px;
    margin: 0 2px;
`;
export const PokemonTypeName = styled.Text`
    text-transform: capitalize;
    color: #FFFFFF;

`;
