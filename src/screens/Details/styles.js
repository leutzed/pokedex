import styled from "styled-components";

export const Card = styled.View`
    background-color: #F3F3F3;
    flex: 1;
    margin: 15px;
    border-radius: 15px;
`;

export const CardHeader = styled.View`
    background-color: #48D0B0;
    height: 120px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    flex-direction: row;
`;

export const LeftHeader = styled.View`
    width: 50%;
`

export const CircleBackground = styled.View`
    height: 120px;
    width: 120px;
    background-color: #71E5C9;
    border-radius: 100px;
    margin-top: 10px;
    margin-left: 25px;
`

export const RightHeader = styled.View`
    width: 50%;
`
export const PokemonIdWrapper = styled.View`
    background-color: #FFCB05;  
    border-radius: 10px;
    margin-top: 24px;
    width: 48px;

`;

export const PokemonId = styled.Text`
    align-self: center;
`

export const PokemonName = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: #fff;
    line-height: 26px;
    margin-top: 8px;
`

export const PokemonTypes = styled.View``

export const PokemonLore = styled.Text`
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    padding: 0 15px;
    color: #21386E;
`

export const PokemonPhysic = styled.View``

export const PokemonStats = styled.View``