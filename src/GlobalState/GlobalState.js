import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import api from "../Service/api";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    //Dados dos Registros
    const [registerInfos, setRegisterInfos] = useState({
        email: '',
        password:'',
        name: '',
        tell: '',
        crm: null,
        cidade: null,
        cpf: '',
        especialit: null,
        aux: null
    })
    const [alertSucessState, setAlertSucessState] = useState(false)
    const [alertSucessStateHome, setAlertSucessStateHome] = useState(false)
    const [userInfos, setUsersInfos] = useState({})


    const datas = {
        setRegisterInfos,
        registerInfos,

        //ALert
        alertSucessState,
        setAlertSucessState,
        alertSucessStateHome,
        setAlertSucessStateHome,
        setUsersInfos,
        userInfos
    }


    return(
        <GlobalStateContext.Provider value={datas}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;