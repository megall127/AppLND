import React, { useContext, useEffect, useState } from "react";
import { BoxInfos, ImageBack, InputLogin, TextInputCheck, TittleText, ViewBody} from "../styled";
import DropShadow from "react-native-drop-shadow";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../../../components/ButtonPrimary";
import BackButton from "../../../../components/BackButton";
import GlobalStateContext from "../../../../GlobalState/GlobalStateContext";
import { TittleSubText } from "./styled";
import AlertWrong from "../../../../components/AlertWrong";

const FirstStepRegister = () => {

    const { setRegisterInfos, registerInfos } = useContext(GlobalStateContext);

    const [telefone , setTelefone] = useState("")
    const [senha , setSenha] = useState("")
    const [confirmarSenha , setconfirmarSenha] = useState("")


    //showAlert
    const [alertTelefone, setAlertTelefone] = useState("0")
    const [alertSenha, setAlertSenha] = useState("0")
    const [alertConfrSenha, setAlertConfrSenha] = useState("0")
    const [failAlert, setFailAlert] = useState(false)

    const navigation = useNavigation();

    useEffect(() => {
      setRegisterInfos(prevState => ({...prevState, tell: telefone, password: senha}))
    },[telefone,senha])

    const checkEmpty = (value) => {
      if(value === ""){
          return true
      } else {
          return false
      }
    }
    
    const buttonContinue = () => {
        checkSenha()
    }

    const checkInput = (value) => {
      if(value === "1"){
          return "red"
      } else {
          return "black"
      }
    }

    const checkSenha = () => {
      if(senha !== confirmarSenha){
        setFailAlert(true)
        setTimeout(() => {
          setFailAlert(false)
        }, 3000)
      } else {
        if(checkEmpty(telefone) && checkEmpty(senha) && checkEmpty(confirmarSenha)){
          setAlertTelefone("1")
          setAlertSenha("1")
          setAlertConfrSenha("1")
        } else if(checkEmpty(telefone) && checkEmpty(confirmarSenha)) {
          setAlertTelefone("1")
          setAlertConfrSenha("1")
        } else if(checkEmpty(senha) && checkEmpty(telefone)){
          setAlertSenha("1")
          setAlertTelefone("1")
        } else if(checkEmpty(confirmarSenha) && checkEmpty(senha)){
          setAlertSenha("1")
          setAlertConfrSenha("1")
        } else if(checkEmpty(confirmarSenha)){
          setAlertConfrSenha("1")
        } else if(checkEmpty(senha)){
          setAlertSenha("1")
        } else if(checkEmpty(telefone)){
          setAlertTelefone("1")
        } else {
          navigation.navigate("SECONDTSTEP")
        }
      }
    }

    const checkAlert = () => {
      if(failAlert === true){
        return (
          <AlertWrong text="As senhas não conferem"></AlertWrong>
        )
      } else {
        return(
          <></>
        )
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
              {checkAlert()}
            <BackButton onPress={() => navigation.navigate("REGISTER")}></BackButton>
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
                <TittleText style={{width: 200}}>Estamos quase acabando</TittleText>
                <TittleSubText>2 de 3</TittleSubText>
                <InputLogin  keyboardType="numeric" onChangeText={setTelefone} value={telefone} placeholder="Telefone" style={{marginTop: 50, borderColor:checkInput(alertTelefone)}}></InputLogin>
                {checkInputText(alertTelefone)}
                <InputLogin secureTextEntry={true} onChangeText={setSenha} value={senha} placeholder="Senha" style={{marginTop: 35,borderColor:checkInput(alertSenha)}}></InputLogin>
                {checkInputText(alertSenha)}
                <InputLogin secureTextEntry={true} onChangeText={setconfirmarSenha} value={confirmarSenha} placeholder="Confirmar senha" style={{marginTop: 35,borderColor:checkInput(alertConfrSenha)}}></InputLogin>
                {checkInputText(alertConfrSenha)}
                <PrimaryButton marginTops={30} label="Continuar" onPress={() => buttonContinue()}/>
            </BoxInfos>

            </DropShadow>
        </ViewBody>
    )
}

export default FirstStepRegister;