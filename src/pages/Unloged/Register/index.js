import React, { useContext, useEffect, useState } from "react";
import { Background, BoxInfos, ButtonForget, ButtonForgetText, ImageBack, InputLogin, TextInputCheck, TittleSubText, TittleText, ViewBody, ViewBodyScroll } from "./styled";
import DropShadow from "react-native-drop-shadow";
import fundo from "../../../assets/imgs/fundo2.png"
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../../components/ButtonPrimary";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import AlertWrong from "../../../components/AlertWrong";
import AlertSucess from "../../../components/AlertSucess";

const RegisterIndex = () => {

    const navigation = useNavigation();

    const { setRegisterInfos } = useContext(GlobalStateContext);

    const [email, setEmail] = useState('')
    const [nome , setNome] = useState('')
    const [tell , setTell] = useState('')
    

    //showAlert
    const [alertName, setAlertName] = useState("0")
    const [alertEmail, setAlertEmail] = useState("0")
    const [alertTell, setAlerTell] = useState("0")

    useEffect(() => {
      setRegisterInfos(prevState => ({...prevState, email:email, name: nome, tell: tell}))
    },[email, nome, tell])

    const checkEmpty = (value) => {
      if(value === ""){
          return true
      } else {
          return false
      }
    }

    const buttonContinue = () => {
      if(checkEmpty(email) && checkEmpty(nome)){
        setAlertEmail("1")
        setAlertName("1")
      } else if(checkEmpty(nome)) {
        setAlertName("1")
      } else if(checkEmpty(email)) {
        setAlertEmail("1")
      } else {
        setAlertEmail("0")
        setAlertName("0")
        navigation.navigate("FIRSTSTEP")
      }
    }

    const checkInput = (value) => {
      if(value === "1"){
          return "red"
      } else {
          return "black"
      }
    }
    const checkInputText = (value) => {
      if(value === "1"){
          return(
            <TextInputCheck>Campo obrigatório</TextInputCheck>
          )
      } else {
          return (
            <>
            </>
          )
      }
    }

    return(
            <ViewBody>
              <Background/>
            <DropShadow
                  style={{
                    width: "100%",
                    zIndex: 2,
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
                <TittleText>Crie a sua conta</TittleText>
                <TittleSubText>Preencha os campos abaixo para a sua conta ser validada.</TittleSubText>
                <TittleSubText>1 de 2</TittleSubText>
                <InputLogin onChangeText={setNome}  value={nome} placeholder="Nome" style={{marginTop: 70, borderColor:checkInput(alertName)}}></InputLogin>
                {checkInputText(alertName)}
                <InputLogin onChangeText={setEmail} value={email} placeholder="E-mail" style={{marginTop: 35, borderColor: checkInput(alertEmail)}}></InputLogin>
                {checkInputText(alertEmail)}
                <InputLogin onChangeText={setTell} value={tell} keyboardType="numeric" placeholder="Telefone" style={{marginTop: 35, borderColor: checkInput(alertTell)}}></InputLogin>
                <PrimaryButton marginTops={30} radius={10} label="Continuar" onPress={()=> buttonContinue()}/>
                <PrimaryButton marginTops={10} radius={10}  label="Ja tenho conta" onPress={()=> navigation.navigate("LOGINN")}/>
            </BoxInfos>
            </DropShadow>
        </ViewBody>
    )
}

export default RegisterIndex;