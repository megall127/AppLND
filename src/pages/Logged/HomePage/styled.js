
import { Dimensions} from "react-native";
import styled from "styled-components/native";

const {height , width} = Dimensions.get("window")

export const ViewBody = styled.View`
    background-color: white;
    flex: 1;
`

export const ImageBack = styled.View`
    z-index: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 230px;
    background-color: #085769;
    border-bottom-left-radius: 40px;
`
export const ImageIcon = styled.Image`

`
export const ImageSelfie = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 80px;
`
export const ImageFlyer = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 30px;
`
export const BoxInfos = styled.View`
    margin-top: 20px;
    width: 90%;
    height: 300px;
    background-color: white;
    align-self: center;
    z-index: 0;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const ButtonMenu = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: white;
    align-self: flex-start;
    border-radius: 50px;
    margin-left: 20px;
    margin-top: 30px;
`
export const ButtonExit = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    align-self: flex-start;
    border-radius: 50px;
    margin-left: 20px;
`
export const MenuButtom = styled.TouchableOpacity`
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: white;
    flex-direction: row;
    align-self: flex-start;
    margin-top: 10px;
`
export const ViewHeader = styled.View`
 width: 100%;
`
export const ContainerInfosUser = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ButtonsContainer = styled.View`

`
export const UserName = styled.Text`
    font-size: 30px;
    color: white;
    margin-left: 30px;
    font-weight: 600;
`
export const SubText = styled.Text`
    font-size: 15px;
    color: black;
    margin-left: 30px;
    width: 200px;
`
export const PhotoSelfie = styled.View`
    height: 130px;
    width: 130px;
    background-color: white;
    margin-right: 30px;
    border-radius: 80px;
    justify-content: center;
    align-items: center;

`
export const PesinhosInfos = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: black;
`

export const SubInfos = styled.Text`
    font-size: 10px;
    font-weight: 600;
    color: #c4c4c4;
`
export const SubInfosSaldo = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #c4c4c4;
`

export const ImagePezinho = styled.Image`
    height: 20px;
    width: 10px;
`

export const ViewModal = styled.View`
    flex: 1;
    background-color: white;
`
export const IconButtomMenu = styled.Image`
    margin-left: 10px;
`
export const TextButtonMenu = styled.Text`
    color: #8A9696;
`

export const ButtonMoreInfo = styled.TouchableOpacity`
    margin-left: 35px;
    margin-top: 20px;

`
export const ButtonMoreInfoText = styled.Text`
    text-decoration: underline; 
    color: #BA984A;
    font-size: 16px;
`

export const ButtonHome = styled.TouchableOpacity`
    height: 150px;
    width: 150px;
    background-color: #085769;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

`
export const ButtonHomeText = styled.Text`
    color: white;
    font-size: 17px;

`