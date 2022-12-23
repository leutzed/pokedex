import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import api from '../../service/api';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';

import * as S from './styles';

export function Details() {
    const route = useRoute();
    const { goBack } = useNavigation();
    const { pokemonId } = route.params;
    const { colors } = useTheme();

    const [pokemon, setPokemon] = useState({});
    const [pokemonFlavorText, setPokemonFlavorText] = useState([]);
    const [load, setLoad] = useState(true);

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
            } finally {
                setLoad(false);
            }
        }

        getPokemonDetails();
    }, [])

    function handleGoBack() {
        goBack();
    }

    return <>
        {load ? <>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> Loading </Text>
        </> :
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header />
                <S.GoBack onPress={handleGoBack}>
                    <Ionicons name="arrow-back-outline" size={30} color='#fff'></Ionicons>
                </S.GoBack>
                <S.Card>
                    <S.CardHeader type={pokemon.types[0].type.name}>
                        <S.LeftHeader>
                            <S.CircleBackground type={pokemon.types[0].type.name}>
                                <S.PokemonImage
                                    source={{
                                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                                    }}
                                />
                            </S.CircleBackground>
                        </S.LeftHeader>
                        <S.RightHeader>
                            <S.PokemonIdWrapper>
                                <S.PokemonId>#{pokemonId}</S.PokemonId>
                            </S.PokemonIdWrapper>
                            <S.PokemonName>{pokemon.name}</S.PokemonName>
                            <S.PokemonDetails>
                                {pokemon.types.map(pokemonType =>
                                    <S.PokemonTypeBox type={pokemonType.type.name}>
                                        <S.PokemonTypeName key={pokemonType.type.name}>
                                            {pokemonType.type.name}
                                        </S.PokemonTypeName>
                                    </S.PokemonTypeBox>)}
                            </S.PokemonDetails>
                        </S.RightHeader>
                    </S.CardHeader>
                    <S.PokemonLore>A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.</S.PokemonLore>
                    <S.PokemonPhysic></S.PokemonPhysic>
                    <S.PokemonStats></S.PokemonStats>
                </S.Card>

            </View>
        }
    </>
}