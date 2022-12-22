import React from 'react';
import { Container, Logo } from './styles';

import logoImg from '../../assets/logo.png'

export function LogoImg() {
    return (
        <Container>
            <Logo source={logoImg} />
        </Container>
    );
}