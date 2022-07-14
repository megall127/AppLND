import React, { useContext, useEffect, useState } from "react";
import { BoxInfos, ButtonForget, ButtonForgetText, ImageBack, InputLogin, TittleSubText, TittleText, ViewBody, ViewBodyScroll } from "./styled";
import PrimaryButton from "../../../components/ButtonPrimary";
import DropShadow from "react-native-drop-shadow";
import fundo from "../../../assets/imgs/fundo.png"
import { useNavigation } from "@react-navigation/native";
import AlertWrong from "../../../components/AlertWrong";
import AlertSucess from "../../../components/AlertSucess";
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import api from "../../../Service/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

const LoginPage = () => {


  const navigation = useNavigation();
  const { 
    alertSucessState,
    setAlertSucessState,
    alertSucessStateHome,
    setAlertSucessStateHome 
  } = useContext(GlobalStateContext);

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[loading, setLoading] = useState(false)
  const[failAlert, setFailAlert] = useState(false)

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
      console.log("erro", e)
    }
  }


  const loginHandle = () => {
    setLoading(true)
    api.post("/login", {
      email: email,
      password: password,
    } )
    .then((res) => {
      setLoading(false)
      storeData(res.data.token)
      navigation.navigate("HOMEPAGE")
      setAlertSucessStateHome(true)
      setTimeout(() => {
        setAlertSucessStateHome(false)
      }, 3000)
    })
    .catch((err) => {
      setLoading(false)
      setFailAlert(true)
      setTimeout(() => {
        setFailAlert(false)
      }, 3000)
      console.log(err)
    })
  }

  const showAlertFail = () => {
    if(failAlert === true){
      return(
        <AlertWrong text="Não foi possivel realizar o login"></AlertWrong>
      )
    } else {
      return(
        <></>
      )
    }
}

  const showAlert = () => {
      if(alertSucessState === true){
        return(
          <AlertSucess text="Cadastro feito com sucesso!"></AlertSucess>
        )
      } else {
        return(
          <></>
        )
      }
  }
  const showLoading = () => {
      if(loading === true){
        return(
          <Spinner
          visible={true}
        />
        )
      } else {
        return(
          <></>
        )
      }
  }

    return(
            <ViewBody>
            {showLoading()}
              {showAlert()}
              {showAlertFail()}
                <ImageBack source={fundo}></ImageBack>
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
                <TittleText>Acesse a sua conta</TittleText>
                <TittleSubText>Digite o seu e-mail e senha para acessar a sua conta no app.</TittleSubText>
                <InputLogin onChangeText={setEmail} value={email} placeholder="E-mail" style={{marginTop: 70}}></InputLogin>
                <InputLogin secureTextEntry={true} onChangeText={setPassword} value={password} placeholder="Senha" style={{marginTop: 15}}></InputLogin>
                <ButtonForget >
                <ButtonForgetText>Esqueci minha senha</ButtonForgetText>
                </ButtonForget>
                <PrimaryButton onPress={() => loginHandle()} marginTops={30} label="Confirmar"/>
                <PrimaryButton marginTops={10} label="Ainda não é usuário?"  onPress={()=> navigation.navigate("REGISTER")} />
            </BoxInfos>

            </DropShadow>
        </ViewBody>
    )
}

export default LoginPage;