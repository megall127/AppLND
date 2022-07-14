import React, { useContext, useEffect, useState } from "react";
import { BoxInfos, ButtonExit, ButtonMenu, ButtonsContainer, ContainerInfosUser, IconButtomMenu, ImageBack, ImageIcon, ImagePezinho, ImageSelfie, MenuButtom, PesinhosInfos, PhotoSelfie, SubText, TextButtonMenu, UserName, ViewBody, ViewHeader, ViewModal } from "./styled";
import DropShadow from "react-native-drop-shadow";
import fundo from "../../../assets/imgs/FundoHome.png"
import fundoMenu from "../../../assets/imgs/fundo.png"
import victinho from "../../../assets/imgs/vic.jpg"
import iconMenu from "../../../assets/icons/menu.png"
import perfil from "../../../assets/icons/profile.png"
import chamada from "../../../assets/icons/chamada.png"
import chave from "../../../assets/icons/chave.png"
import agenda from "../../../assets/icons/agenda.png"
import sair from "../../../assets/icons/sair.png"
import x from "../../../assets/icons/x.png"
import pezinho from "../../../assets/icons/sapato.png"
import { useNavigation } from "@react-navigation/native";
import { Modal, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../../Service/api";
import AlertSucess from "../../../components/AlertSucess";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";

const HomePage = () => {


  const navigation = useNavigation();

  const [openMenu, setOpenMenu] = useState(false)
  const [userInfos, setUsersInfos] = useState({})
  const { alertSucessState,
    setAlertSucessState,alertSucessStateHome } = useContext(GlobalStateContext);

  
  const showAlert = () => {
    if(alertSucessStateHome === true){
      return(
        <AlertSucess text="Login efetuado com sucesso"></AlertSucess>
      )
    } else {
      return(
        <></>
      )
    }
}

    useEffect(() => {
       api.get("/takedados",)
       .then((res) => {
        setUsersInfos(res.data)
       })
       .catch((err) => {
        console.log(err)
       })
    },[])


    return(   
            <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                {showAlert()}
            <ImageBack source={fundo}>
                <ViewHeader>
                    <ButtonMenu onPress={()=> setOpenMenu(true)}>
                        <ImageIcon source={iconMenu}/>
                    </ButtonMenu>
                    <ContainerInfosUser>
                        <View>
                        <UserName style={{marginTop: 30}}>Olá,</UserName>
                        <UserName>{userInfos.name}</UserName>
                        </View>
                        <PhotoSelfie>
                            <ImageSelfie source={victinho}></ImageSelfie>
                        </PhotoSelfie>
                    </ContainerInfosUser>
                    <PesinhosInfos style={{paddingTop: 40, marginLeft: 30}}>Saldo de Pezinhos</PesinhosInfos>
                    <View style={{flexDirection: "row",  marginLeft: 30}}>
                    <ImagePezinho source={pezinho}></ImagePezinho>
                    <PesinhosInfos style={{ marginLeft: 5}}>{userInfos.pesinhos}</PesinhosInfos>
                    </View>
                </ViewHeader>
                </ImageBack>
            
            <DropShadow
                  style={{
                    width: "100%",
                    zIndex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                  }}
            >
            <BoxInfos>
            </BoxInfos>
            </DropShadow>
        </ScrollView>
        <Modal
        animationType="slide"
        transparent={true}
        visible={openMenu}
        >
        <ViewModal>
        <ImageBack source={fundoMenu}>
        <ViewHeader>
            <ButtonExit onPress={()=> setOpenMenu(false)}>
                        <ImageIcon style={{height: 20, width: 20}} source={x}/>
                </ButtonExit>
                <ContainerInfosUser>
                        <View>
                        <UserName style={{marginTop: 20}}>Menu</UserName>
                        <SubText>Aqui, está tudo o que você precisa
                        para navegar no app e controlar a 
                        sua conta</SubText>
                        </View>
                    </ContainerInfosUser>
                </ViewHeader>   
        </ImageBack>
        <ButtonsContainer>
        <DropShadow
                  style={{
                    width: "100%",
                    zIndex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1,
                  }}
            >
        <MenuButtom>
            <View style={{width: 50}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={perfil}></IconButtomMenu>
            </View>
            <TextButtonMenu>Perfil</TextButtonMenu>
        </MenuButtom>
        <MenuButtom>
            <View style={{width: 50}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={chamada}></IconButtomMenu>
            </View>
            <TextButtonMenu>Chamada</TextButtonMenu>
        </MenuButtom>
        <MenuButtom>
            <View style={{width: 50}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={chave}></IconButtomMenu>
            </View>
            <TextButtonMenu>Aluguel de sala</TextButtonMenu>
        </MenuButtom>
        <MenuButtom>
            <View style={{width: 50}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={agenda}></IconButtomMenu>
            </View>
            <TextButtonMenu>Agenda da academia</TextButtonMenu>
        </MenuButtom>
        <MenuButtom>
            <View style={{width: 50, justifyContent: "center", alignItems: "center"}}>
            <IconButtomMenu style={{height: 25, width: 15}} source={pezinho}></IconButtomMenu>
            </View>
            <TextButtonMenu>Sobre os pézinhos</TextButtonMenu>
        </MenuButtom>
        <MenuButtom>
            <View style={{width: 50}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={sair}></IconButtomMenu>
            </View>
            <TextButtonMenu>Sair do app</TextButtonMenu>
        </MenuButtom>
        </DropShadow>
        </ButtonsContainer>
        </ViewModal>
        </Modal>
        </SafeAreaView>
    )
}

export default HomePage;