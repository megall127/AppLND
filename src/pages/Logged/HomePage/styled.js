
import { Dimensions} from "react-native";
import styled from "styled-components/native";

const {height , width} = Dimensions.get("window")

export const ViewBody = styled.View`
    background-color: white;
    flex: 1;
`

export const ImageBack = styled.ImageBackground`
    width: 100%;
    padding-bottom: 10px;
    justify-content: space-around;
    align-items: center;
`
export const ImageIcon = styled.Image`

`
export const ImageSelfie = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 80px;
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
    margin-top: 20px;
`
export const ButtonExit = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    align-self: flex-start;
    border-radius: 50px;
    margin-left: 20px;
    margin-top: 20px;
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
 margin-bottom: 90px;
`
export const ContainerInfosUser = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ButtonsContainer = styled.View`

`
export const UserName = styled.Text`
    font-size: 35px;
    color: black;
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
    font-size: 15px;
    font-weight: 600;
    color: black;
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

`