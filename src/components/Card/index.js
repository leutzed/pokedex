import React from 'react';

import * as S from './styles';

export function Card({ data, ...rest }) {
    return (
        <S.Container>
            <S.CardComponent {...rest}>
                <S.Top>
                    <S.IndexNumber>#{data.id}</S.IndexNumber>
                </S.Top>
                <S.Middle>
                    <S.BackgroundCircle>
                    <S.PokemonImage 
                        source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
                        }}
                    />
                    </S.BackgroundCircle>
                </S.Middle>
                <S.Bottom>
                    <S.PokemonName>{data.name}</S.PokemonName>
                    <S.PokemonDetails>
                            {data.types.map(pokemonType => <S.PokemonTypeBox>
                            <S.PokemonTypeName key={pokemonType.type.name}>
                                {pokemonType.type.name}
                            </S.PokemonTypeName>
                        </S.PokemonTypeBox> )}
                    </S.PokemonDetails>
                </S.Bottom> 
            </S.CardComponent>
        </S.Container>
    );
}

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png