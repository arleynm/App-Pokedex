import styled, { css } from "styled-components/native"
import { TypeName } from ".";


type TypeProps = {
    type: TypeName;
}

export const Hearder = styled.View<TypeProps>`
    ${({theme,type}) => css`
        background-color: ${theme.colors.backgroundCard[type]};
    `}
`

export const BackButton = styled.View``
export const ContentImage = styled.View``
export const CircleImage = styled.Image``
export const PokemonImage = styled.Image``