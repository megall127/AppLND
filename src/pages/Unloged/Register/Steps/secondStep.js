import React, { useContext, useEffect, useState } from "react";
import DropShadow from "react-native-drop-shadow";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../../../components/ButtonPrimary";
import BackButton from "../../../../components/BackButton";
import { BoxInfos, TittleSubText, TittleText, ViewBody } from "./styled";
import { Picker } from "@react-native-picker/picker";
import GlobalStateContext from "../../../../GlobalState/GlobalStateContext";
import Spinner from 'react-native-loading-spinner-overlay';
import api from "../../../../Service/api";
import AlertWrong from "../../../../components/AlertWrong";

const SecondStep = () => {
    const navigation = useNavigation();

    const [selectedType, setSelectedType] = useState("");
    const [loading, setLoading] = useState(false)
    const [failAlert, setFailAlert] = useState(false)

    const { setRegisterInfos,
          registerInfos,
          setAlertSucessState
         } = useContext(GlobalStateContext);

    useEffect(() => {
      setRegisterInfos(prevState => ({...prevState, typeuser: selectedType}))
    },[selectedType])

    useEffect(() => {
      console.log(registerInfos)
    },[registerInfos])
    
    const registerHandle = () => {
      setLoading(true)
      api.post('/register', registerInfos)
      .then((res) => {
          setLoading(false)
          navigation.navigate("LOGINN")
          setAlertSucessState(true)
          setTimeout(() => {
            setAlertSucessState(false)
          }, 3000)
      })
      .catch((err) => {
        setLoading(false)
        setFailAlert(true)
        setTimeout(() => {
          setFailAlert(false)
        }, 3000)
      })
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


  const checkAlert = () => {
      if(failAlert === true){
        return(
          <AlertWrong text="Algo deu errado!"></AlertWrong>
        )
      } else {
        return(
          <></>
        )
      }
  }


    return(
            <ViewBody>
              {checkAlert()}
              {showLoading()}
            <BackButton onPress={() => navigation.navigate("FIRSTSTEP")}></BackButton>
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
            <BoxInfos style={{height:500}}>
                <TittleText style={{width: 200}}>Quem é você?</TittleText>
                <TittleSubText>Selecione a opção que você se encaixa.</TittleSubText>
                <TittleSubText>3 de 3</TittleSubText>
                <DropShadow
                  style={{
                    width: "100%",
                    zIndex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    marginTop: 50,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                  }}
            >
                <Picker style={{width: 200, backgroundColor: "white"}}
                    selectedValue={selectedType}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedType(itemValue)
                    }>
                    <Picker.Item label="Aluno" value="aluno" />
                    <Picker.Item label="Professor" value="professor" />
                    <Picker.Item label="Monitor" value="monitor" />
                  </Picker>
                  </DropShadow>

                <PrimaryButton onPress={()=> registerHandle()} marginTops="40%" label="Finalizar Cadastro"/>
            </BoxInfos>

            </DropShadow>
        </ViewBody>
    )
}

export default SecondStep;