import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


import { Input } from '../../components/Input';
import { MyTitle } from '../../components/MyTitle';
import { Card } from '../../components/Card';
import api from '../../service/api';

export function Home() {

    const [pokemons, setPokemons] = useState([]);

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
        <View style={{ flex: 1, backgroundColor: '#dddddd' }}>
            <MyTitle />
            <Input />
            <FlatList 
                numColumns={'2'}
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                    <Card data={pokemon}/> 
                )}
                />

        </View>
    );
}