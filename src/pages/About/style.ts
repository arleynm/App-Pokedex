import styled, { css } from "styled-components/native"
import { TypeName } from ".";


type TypeProps = {
    type:TypeName;
}

export const Hearder = styled.View<TypeProps>`
    ${({theme,type}) => css`
        background-color: ${theme.colors.backgroundCard[type]};
    `}
`


