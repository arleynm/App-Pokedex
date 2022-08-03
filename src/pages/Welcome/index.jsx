import React from "react";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from './pokemon.json'
import * as S from "./styles"
import { Button } from "react-native";
import { Platform } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  }
  

  return (
    <S.Container>
      <S.Content>
        {Platform.OS !== 'web' &&
          <S.WapperAnimation>
            <S.wrapperImage>
              <AnimatedLottieView style={{ width: 200 }} autoPlay source={pokemonAnimation} loop />
            </S.wrapperImage>
          </S.WapperAnimation>
        }

        <S.Title>Bem vindo</S.Title>
        <S.SubTitle>Encontro todos os pokemons em apenas um local</S.SubTitle>
      </S.Content>
      <S.Footer>
        <Button title='Iniciar 'onPress={handlePress}/>
      </S.Footer>
    </S.Container>
  )
}