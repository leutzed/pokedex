import React from "react";
import { Image, Text } from "react-native";

import logoImg from '../../assets/logo.png'

import * as S from './styles';

export function Header() {
    return (
        <S.Container>
            <S.LogoImage source={logoImg}/>
        </S.Container>
    )
}