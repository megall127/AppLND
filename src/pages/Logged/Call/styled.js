import styled from "styled-components/native";

export const ViewBody = styled.View`
    background-color: white;
    flex: 1;
`
export const ImageBack = styled.ImageBackground`
    width: 100%;
    height: 300px;
    justify-content: center;
`

export const InputsContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
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
    position: absolute;
    top: 30;
`
export const IconBackButton = styled.Image`
    height: 10px;
    width: 40px;

`
export const SelectPicker = styled.View`
    border: 1px solid #8A9696;
    border-radius: 5px;
    width: 280px;
`
export const ViewHeader = styled.View`
    align-items: center;
    margin-top: 50px;

`
export const TittleHeader = styled.Text`
    font-size: 40px;
    color: black;
    font-weight: 600;
    margin-right: 70px;

`
export const SubTittleHeader = styled.Text`
    font-size: 20px;
    color: black;
    width: 300px;
    margin-left: auto;
`
export const SelectMonitor = styled.View`
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


