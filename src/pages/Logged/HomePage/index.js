import React, { useContext, useEffect, useState } from "react";
import { BoxInfos, ButtonExit, ButtonHome, ButtonHomeText, ButtonMenu, ButtonMoreInfo, ButtonMoreInfoText, ButtonsContainer, ContainerInfosUser, IconButtomMenu, ImageBack, ImageFlyer, ImageIcon, ImagePezinho, ImageSelfie, MenuButtom, PesinhosInfos, PhotoSelfie, SubInfos, SubInfosSaldo, SubText, TextButtonMenu, UserName, ViewBody, ViewHeader, ViewModal } from "./styled";
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

  const [openMenu, setOpenMenu] = useState(false);
  const [docSelect, setDocSelect] = useState({proc:[]})
  const { alertSucessState,
    setAlertSucessState,alertSucessStateHome,setUsersInfos,userInfos } = useContext(GlobalStateContext);

  
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
  const handleInfosDoc = () => {
    api.post('/takedoctors', {id: userInfos.id})
    .then((res) => {
        setDocSelect(res.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  useEffect(() => {
    handleInfosDoc()
  },[])

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

  const left15DaysTotal = () => {
    const today = new Date()
    const day = 86400000
    const daysAgo = new Date(today - (15*day))
    const leftDaysAgo = docSelect.proc.filter(element => element.date_proc <= today.toISOString().slice(0, 10) && element.date_proc >= daysAgo.toISOString().slice(0,10) )


    let total = 0;
    for(let value of leftDaysAgo) {
        total += value.valor_proc;
    }
    return formatCurrency(total);
}


const next15DaysTotal = () => {
  const today = new Date()
  const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 15));
  const leftDaysAgo = docSelect.proc.filter(element => element.date_proc >= today.toISOString().slice(0, 10) && element.date_proc <= DaysInTheFuture.toISOString().slice(0,10) )



  let total = 0;
  for(let value of leftDaysAgo) {
      total += value.valor_proc;
  }
  return formatCurrency(total);
}

const next30DaysTotal = () => {
  const today = new Date()
  const DaysInTheFuture = new Date(new Date().setDate(new Date().getDate() + 30));
  const leftDaysAgo = docSelect.proc.filter(element => element.date_proc >= today.toISOString().slice(0, 10) && element.date_proc <= DaysInTheFuture.toISOString().slice(0,10) )

  let total = 0;
  for(let value of leftDaysAgo) {
      total += value.valor_proc;
  }
  return formatCurrency(total);
}




    return(   
            <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                {showAlert()}
                <ViewHeader>
                  <ImageBack>
                  </ImageBack>
                    <ButtonMenu onPress={()=> setOpenMenu(true)}>
                        <ImageIcon source={iconMenu}/>
                    </ButtonMenu>
                    <ContainerInfosUser>
                        <View>
                        <UserName style={{marginTop: 30}}>Olá,</UserName>
                        <UserName>Dr. {userInfos.name}</UserName>
                        </View>
                        <PhotoSelfie>
                            <ImageSelfie source={perfil}></ImageSelfie>
                        </PhotoSelfie>
                    </ContainerInfosUser>
                    <PesinhosInfos style={{paddingTop: 40, marginLeft: 30}}>Saldo disponível</PesinhosInfos>
                    <View style={{flexDirection: "row",  marginLeft: 30}}>
                    <PesinhosInfos>R${next30DaysTotal()}</PesinhosInfos>
                    </View>
                </ViewHeader>
                  <View style={{flexDirection: "row", justifyContent: "space-evenly"  , marginTop: 20}}>
                  <View style={{flexDirection: "column"}}>
                  <SubInfos>últimos 15 dias</SubInfos>
                  <SubInfosSaldo>R${left15DaysTotal()}</SubInfosSaldo>
                  </View>
                  <View style={{flexDirection: "column"}}>
                  <SubInfos>próximos 15 dias</SubInfos>
                  <SubInfosSaldo>R${next15DaysTotal()}</SubInfosSaldo>
                  </View>
                  <View style={{flexDirection: "column"}}>
                  <SubInfos>próximos 30 dias</SubInfos>
                  <SubInfosSaldo>R${next30DaysTotal()}</SubInfosSaldo>
                  </View>
                  </View>
                  <ButtonMoreInfo>
                    <ButtonMoreInfoText>Mais informaçõess</ButtonMoreInfoText>
                  </ButtonMoreInfo>
                <View style={{justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginTop: 40}}>
                  <ButtonHome>
                      <ButtonHomeText>Gráficos</ButtonHomeText>
                  </ButtonHome>
                  <ButtonHome>
                    <ButtonHomeText>Produção</ButtonHomeText>
                  </ButtonHome>

                </View>
                <View style={{justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginTop: 20}}>
                  <ButtonHome>
                  <ButtonHomeText>Conciliação</ButtonHomeText>
                  </ButtonHome>
                  <ButtonHome>
                  <ButtonHomeText>Ticket médio</ButtonHomeText>
                  </ButtonHome>

                </View>

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
        <MenuButtom onPress={() => navigation.navigate("PROFILE")}>
            <View style={{width: 50}}>
            <IconButtomMenu style={{height: 30, width: 30}} source={perfil}></IconButtomMenu>
            </View>
            <TextButtonMenu>Perfil</TextButtonMenu>
        </MenuButtom>
        <MenuButtom onPress={() => navigation.navigate("CALLFIRST")}>
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