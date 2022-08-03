import React from "react";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from './pokemon.json'


export function Welcome() {
    return <S.Container>
    <S.Content>
        <S.WapperAnimation>
            <S.wrapperImage>
                <AnimatedLottieView style ={{width: 200}} autoPlay source={pokemonAnimation} loop />
            </S.wrapperImage>   
        </S.WapperAnimation>
        
        <S.Title>Bem vindo</S.Title>
        <S.SubTitle>Encontro todos os pokemons em apenas um local</S.SubTitle>
    </S.Content>
        <S.Footer>
            <Button title= 'Iniciar '/>
        </S.Footer>

    </S.Container>
}