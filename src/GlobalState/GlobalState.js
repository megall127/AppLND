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
        pesinhos: 0,
        typeuser: ''
    })
    const [alertSucessState, setAlertSucessState] = useState(false)
    const [alertSucessStateHome, setAlertSucessStateHome] = useState(false)


    const datas = {
        setRegisterInfos,
        registerInfos,

        //ALert
        alertSucessState,
        setAlertSucessState,
        alertSucessStateHome,
        setAlertSucessStateHome


    }


    return(
        <GlobalStateContext.Provider value={datas}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;