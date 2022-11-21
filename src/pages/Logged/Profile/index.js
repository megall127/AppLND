import React, { useContext } from "react";
import { BackButton, ButtonEdit, IconBackButton, ImageBack, ImageSelfie, InputProfile, InputsContainer, PhotoSelfie, TextButtonEdit, TextInput, ViewBody } from "./styled";
import fundo from "../../../assets/imgs/FundoHome.png"
import profile from "../../../assets/icons/profilee.png"
import { View } from "react-native";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import seta from "../../../assets/icons/setaPreta.png"
import { useNavigation } from "@react-navigation/native";




const Profile = () => {

    const {setUsersInfos,userInfos } = useContext(GlobalStateContext);
    const navigation = useNavigation();



    return(
        <ViewBody>
            <ImageBack source={fundo}>
            <BackButton onPress = {() => navigation.navigate("HOMEPAGE")}>
                <IconBackButton source={seta}></IconBackButton>
            </BackButton>
                        <PhotoSelfie>
                            <ImageSelfie source={profile}></ImageSelfie>
                        </PhotoSelfie>
                        <ButtonEdit>
                            <TextButtonEdit>Editar</TextButtonEdit>
                        </ButtonEdit>
            </ImageBack>
            <InputsContainer>
                <View style={{marginTop: 40}}>
                <TextInput>Nome</TextInput>
                <InputProfile placeholder={userInfos.name} placeholderTextColor="#000"></InputProfile>
                </View>
                <View style={{marginTop: 30}}>
                <TextInput>Telefone</TextInput>
                <InputProfile placeholder={userInfos.tell} placeholderTextColor="#000"></InputProfile>
                </View>
                <View style={{marginTop: 30}}>
                <TextInput>Data de Nascimento</TextInput>
                <InputProfile></InputProfile>
                </View>
            </InputsContainer>
        </ViewBody>
    )
}

export default Profile;