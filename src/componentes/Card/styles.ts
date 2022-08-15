import styled, { css } from "styled-components/native";

interface PokemonType {
  type: "grass" | "fire" | "water" | "poison" | "bug" | "flying" | "eletric" | "ground";
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-top: 40px;
    flex-direction: row;
    padding: 20px;
    justify-content: space-between;
    height: 130px;
  `}
`

export const LeftSide = styled.View`
  display: flex;
  position: relative;
  flex: 1;
  justify-content: space-between;
`

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;  
`;


export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-weight:bold;
    font-size: 25px;
    text-transform: capitalize;
    color: ${theme.colors.light_text};
  `}
`;


export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight:bold;
    font-size: 16px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonContentType = styled.Text`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${theme.colors.boxType[type]};
  `}
`

export const PokemonTypeText = styled.Text`
     ${({ theme }) => css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.text_white};
        text-transform: capitalize;
     `}
`;

export const RightSide = styled.View`
  flex: .3;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PokemonImage = styled.Image`
    margin-top: -30px;
    width: 150px;
    height: 150px;
`;


export const PokemonDetail = styled.Image`
  position: absolute;
  width: 145px;
  height: 145px;
  right: -20;
`