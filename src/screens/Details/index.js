import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, Alert } from 'react-native';

import api from '../../service/api';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';

import * as S from './styles';

export function Details() {
    const route = useRoute();
    
    const { goBack } = useNavigation();
    const { pokemonId } = route.params;
    const { colors } = useTheme();
    
    const [abilitiesSum, setAbilitiesSum] = useState(0);
    const [pokemon, setPokemon] = useState({});
    const [pokemonFlavorText, setPokemonFlavorText] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function getPokemonDetails() {
            try {
                const response = await api.get(`/pokemon/${pokemonId}`);
                const { stats, abilities, id, name, types, height, weight, moves } = response.data;

                const currentType = types[0].type.name;
                const color = colors.backgroundCard[currentType];

                setPokemon({
                    stats, abilities, id, name, types, height, weight, moves, color
                })
            } catch (err) {
                Alert.alert('Something wrong happened!')
            } finally {
                setLoad(false);
            }
        }

        getPokemonDetails();
    }, [])

    useEffect(() => {
        async function getFlavorText() {
            try {
                const response = await api.get(`/pokemon-species/${pokemonId}`);
                const result = response.data.flavor_text_entries[0]['flavor_text'];

                setPokemonFlavorText(result)
            } catch (err) {
                Alert.alert('Something wrong happened!')
            }
        }
        getFlavorText();
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
                    <S.PokemonLore>{pokemonFlavorText}</S.PokemonLore>
                    <S.PokemonPhysic>
                        <S.PokemonAppearance>
                            <S.PokemonAppearanceName>Weight:</S.PokemonAppearanceName>
                            <S.PokemonAppearanceBg type={pokemon.types[0].type.name}>
                                <S.PokemonAppearanceValue>{(pokemon.weight * 0.1).toFixed(1)}kg</S.PokemonAppearanceValue>
                            </S.PokemonAppearanceBg>
                        </S.PokemonAppearance>
                        <S.PokemonAppearance>
                            <S.PokemonAppearanceName>Height:</S.PokemonAppearanceName>
                            <S.PokemonAppearanceBg type={pokemon.types[0].type.name}>
                                <S.PokemonAppearanceValue>{(pokemon.height * 0.1).toFixed(1)}m</S.PokemonAppearanceValue>
                            </S.PokemonAppearanceBg>
                        </S.PokemonAppearance>
                        <S.PokemonAppearance>
                            <S.PokemonAppearanceName>Major Move</S.PokemonAppearanceName>
                            <S.PokemonAppearanceBg type={pokemon.types[0].type.name}>
                                <S.PokemonAppearanceValue style={{ textTransform: 'capitalize' }}>{pokemon.moves[0].move.name}</S.PokemonAppearanceValue>
                            </S.PokemonAppearanceBg>
                        </S.PokemonAppearance>
                    </S.PokemonPhysic>
                    {
                        pokemon.stats.map(attribute =>
                            <>
                                <S.PokemonStats key={attribute.stat.name}>
                                    <S.PokemonAttribute>{attribute.stat.name}</S.PokemonAttribute>
                                    <S.PokemonAttrWrapper>
                                        <S.PokemonAttributeValue>{attribute.base_stat}</S.PokemonAttributeValue>
                                        <S.PokemonBarWrapper>
                                            <S.PokemonAttributeBar
                                                type={pokemon.types[0].type.name}
                                                borderWidth={0}
                                                progress={attribute.base_stat / 100}
                                                width={100}
                                                color={attribute.base_stat / 100 >= 0.5 ? '#45C0A3' : '#E63950'}
                                                unfilledColor={'#B7B7B8'}
                                            />
                                        </S.PokemonBarWrapper>
                                    </S.PokemonAttrWrapper>
                                </S.PokemonStats>
                            </>,
                        )
                    }

                    <S.PokemonStats>
                        <S.PokemonAttribute>total</S.PokemonAttribute>
                        <S.PokemonAttrWrapper>
                            <S.PokemonAttributeValue></S.PokemonAttributeValue>
                            <S.PokemonBarWrapper>
                                <S.PokemonAttributeBar
                                    width={100}
                                    borderWidth={0}
                                    color={'#53E37E'} 
                                    progress={100}
                                ></S.PokemonAttributeBar>
                            </S.PokemonBarWrapper>
                        </S.PokemonAttrWrapper>
                    </S.PokemonStats>
                </S.Card>

            </View>
        }
    </>
}