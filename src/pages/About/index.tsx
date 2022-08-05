import React, {useEffect, useState} from "react";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";
import {ScrollView, Text} from "react-native";
import api from "../../service/api";
import { Alert } from "react-native";
import { Feather } from '@expo/vector-icons'
import circle from "../../assets/img/circle.png"

type RouteParams={
    pokemonId: number;
}

type Stats = {
    base_stat: 62,
    stat:{
        name: string
    },

}

type Ability= {
    ability: string;

}

export type TypeName =
| 'grass'
| 'fire'
| 'water'
| 'poison'
| 'normal'
| 'bug'
| 'flying'
| 'eletric'
| 'ground'

type PokemonType = {
    type:{
        name:TypeName
    }
}

type PokemonProps = {
    id: number;
    name: string;
    status: Stats[];
    abilities: Ability[]
    color: string;
    types: PokemonType[]

}

export function About(){
    const route = useRoute();
    const {pokemonId} = route.params as RouteParams;
    const{colors} = useTheme();

    const [pokemon,setPokemon] = useState({} as PokemonProps)

    useEffect(() => {
        async function getPokemonDetail(){
            try{
                const response = await api.get('/pokemon/${pokemonId}')
                const{stats, abilities, id ,name,types} = response.data;
                
                const currentType = types[0].type.name as TypeName;
                const color = colors.backgroundCard[currentType];

                setPokemon({
                    stats, abilities, id ,name,types, color
                })

            } catch(err){
                Alert.alert{'Ops , ocorreu um erro'}
                
            }
        }

        getPokemonDetail()
    }, [])


    return <ScrollView>
        <S.header>
            <S.BackButton>
                <Feather name="chevrom-left" size={24} color= "#FFF"/>
            </S.BackButton>

        <S.ContentImage>
            <S.CircleImage source={circle}/>
            <S.PokemonImage source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}/>

        </S.ContentImage>
    </ScrollView>
}