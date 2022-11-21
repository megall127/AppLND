import styled from "styled-components/native";

export const ViewBody = styled.View`
    background-color: white;
    flex: 1;
`
export const ImageBack = styled.ImageBackground`
    width: 100%;
    height: 350px;
    align-items: center;
    justify-content: center;
`

export const PhotoSelfie = styled.View`
    margin-top: 40px;
    height: 130px;
    width: 130px;
    background-color: #c4c4c4;
    border-radius: 80px;
    justify-content: center;
    align-items: center;

`

export const ImageSelfie = styled.Image`
    width: 90%;
    height: 90%;
    border-radius: 80px;
`
export const ButtonEdit = styled.TouchableOpacity`
    margin-top: 10px;

`
export const TextButtonEdit = styled.Text`
    font-size: 20px;
    color: black;
`
export const TextInput = styled.Text`
    font-size: 15px;
    color: #c4c4c4;
`
export const InputsContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
`
export const InputProfile = styled.TextInput`
    width: 300px;
    height: 50px;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 18px;
`

export const BackButton = styled.TouchableOpacity`
    height: 70px;
    width: 70px;
    background-color: white;
    border-radius: 50px;
    align-self: flex-start;
    margin-left: 20px;
    justify-content: center;
    align-items: center;

`
export const IconBackButton = styled.Image`
    height: 10px;
    width: 40px;

`