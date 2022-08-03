import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({theme}) => css`
        width: 100px;
        height: 50px;
        background-color: ${theme.colors.types.water};

        justify-content: center;
        border-radius: 20px;
        align-items: center;
    `}
`; 


export const Title = styled.Text `
    ${({theme}) => css`
        font-size: 14px;
        color: ${theme.colors.text_white};
    `}
`;