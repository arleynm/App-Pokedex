import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroud};
        position: relative;
    `}
`;

export const Header = styled.ImageBackground`
    ${({theme}) => css`
        width: ${windowWidth}px;
        height 220px;
        background-color: ${theme.colors.backgroud};
        margin-left: -20px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 32px;
        line-heigth: 38px;
        font-weight: bold;
        color:${theme.colors.light_text}
    `}
`;
