import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import api from '../../service/api';
import { useTheme } from 'styled-components';

export function Details() {
    const route = useRoute();
    const { pokemonId } = route.params;
    const { colors } = useTheme();

    const [pokemon, setPokemon] = useState({});
    
    useEffect(() => {
        async function getPokemonDetails() {
            try {
                const response = await api.get(`/pokemon/${pokemonId}`);
                const {stats, abilities, id, name, types} = response.data;

                const currentType = types[0].type.name;
                const color = colors.backgroundCard[currentType];
                console.log(color)

            } catch(err) {

            }
        }

        getPokemonDetails();
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
            <Text style={{margin: 100}}>{pokemonId}</Text>
        </View>
    );
}