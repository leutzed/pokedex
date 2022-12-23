import styled from "styled-components";

import * as Progress from 'react-native-progress';

export const GoBack = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const Card = styled.View`
    background-color: #F3F3F3;
    flex: 1;
    margin: 15px;
    border-radius: 15px;
`;

export const CardHeader = styled.View`
    background-color: ${props => props.theme.colors.backgroundCard[`${props.type}`]};
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
    background-color: ${props => props.theme.colors.circleBackground[`${props.type}`]};
    border-radius: 100px;
    margin-top: 10px;
    margin-left: 25px;
`

export const PokemonImage = styled.Image`
    margin: 20px;
    width: 93px;
    height: 93px;
`;

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
    text-transform: capitalize;
`

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

export const PokemonLore = styled.Text`
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    padding: 0 15px;
    color: #21386E;
`

export const PokemonPhysic = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 50px 30px;
`;

export const PokemonAppearance = styled.View`
    align-items: center;
`;

export const PokemonAppearanceName = styled.Text`
    color: #395BA7;
    font-size: 12px;
    margin-bottom: 5px;
`;

export const PokemonAppearanceBg = styled.View`
    background-color: ${props => props.theme.colors.boxType[`${props.type}`]};
    border-radius: 20px;
`;

export const PokemonAppearanceValue = styled.Text`
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 15px;
    min-width: 75px;
`;

export const PokemonStats = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 20px 0;
`

export const PokemonAttrWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const PokemonAttribute = styled.Text`
    text-transform: capitalize;
    color: #21386E;
    font-size: 15px;
    margin-top: 6px;
`;

export const PokemonAttributeValue = styled.Text`
    margin-right: 10px;
`;

export const PokemonBarWrapper = styled.View``

export const PokemonAttributeBar = styled(Progress.Bar)`
    margin-top: 5px;
`;
