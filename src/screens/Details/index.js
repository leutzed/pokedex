import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import api from '../../service/api';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';

import * as S from './styles';

export function Details() {
    const route = useRoute();
    const { pokemonId } = route.params;
    const { colors } = useTheme();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        async function getPokemonDetails() {
            try {
                const response = await api.get(`/pokemon/${pokemonId}`);
                const { stats, abilities, id, name, types } = response.data;

                const currentType = types[0].type.name;
                const color = colors.backgroundCard[currentType];

                setPokemon({
                    stats, abilities, id, name, types, color
                })
            } catch (err) {
                Alert.alert('Something wrong happened!')
            }
        }

        getPokemonDetails();
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header />
            <S.Card>
                <S.CardHeader>
                    <S.LeftHeader>
                        <S.CircleBackground></S.CircleBackground>
                    </S.LeftHeader>
                    <S.RightHeader>
                        <S.PokemonIdWrapper>
                            <S.PokemonId>#{pokemonId}</S.PokemonId>
                        </S.PokemonIdWrapper>
                        <S.PokemonName>Bulbasaur</S.PokemonName>
                        <S.PokemonTypes></S.PokemonTypes>
                    </S.RightHeader>
                </S.CardHeader>
                <S.PokemonLore>A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.</S.PokemonLore>
                <S.PokemonPhysic></S.PokemonPhysic>
                <S.PokemonStats></S.PokemonStats>
            </S.Card>

        </View>
    );
}