import styled from 'styled-components/native';
import { Dimensions} from "react-native";

const {height , width} = Dimensions.get("window")



export const ButtonBody = styled.TouchableOpacity`
    height: 40px;
    width:200;
    background-color: #FFCD03;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TextButton = styled.Text`

`
