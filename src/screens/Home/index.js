import React, { useEffect, useState } from 'react';
import api from '../../service/api';

import { View, Text, FlatList, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Input } from '../../components/Input';
import { MyTitle } from '../../components/MyTitle';
import { Card } from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

export function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsBkp, setPokemonsBkp] = useState([]);
    const [search, setSearch] = useState('');
    const {navigate} = useNavigation();

    function handleNavigation(pokemonId) {
        navigate('details', {
            pokemonId,
        })
    }
    
    function searchFilterText(text) {
        let arr = JSON.parse(JSON.stringify(pokemonsBkp));

        setPokemons(arr.filter((item) => (item.name).toUpperCase().includes(text.toUpperCase())))
    }

    useEffect(() => {
        async function getPokemons() {
            const response = await api.get('/pokemon');
            const { results } = response.data;

            const payload = await Promise.all(
                results.map(async pokemon => {
                    const {id, types} = await getMoreInfo(pokemon.url);

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )
            setPokemons(payload);
            setPokemonsBkp(payload);
        }

        getPokemons();
    }, [])

    async function getMoreInfo(url) {
        const response = await api.get(url);
        const {id, types} = response.data;

        return {
            id, types
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header />
            <MyTitle />
            <Input 
                placeholder="Search Pokémon"
                onChangeText={(text) => searchFilterText(text)}
            />
            <FlatList 
                numColumns={'2'}
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                    <Card data={pokemon} onPress={() => {
                        handleNavigation(pokemon.id)
                    }}/> 
                )}
                />

        </View>
    );
}