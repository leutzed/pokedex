import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Container, InputText} from './styles';

export function Input(props) {
    return (
        <Container>
            <Ionicons name='search' size={24} color='#3663AD'/>
            <InputText {...props}/>
            <Ionicons name='send' size={24} color='#3663AD'/>
        </Container>
    );
}