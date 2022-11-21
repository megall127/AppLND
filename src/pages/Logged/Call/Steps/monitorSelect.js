import React, { useContext, useState } from "react";
import fundo from "../../../../assets/imgs/FundoHome.png"
import seta from "../../../../assets/icons/setaPreta.png"
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { BackButton, IconBackButton, ImageBack, InputsContainer, MonitorName, SelectMonitor, SubTittleHeader, TittleHeader, ViewBody, ViewHeader } from "../styled";
import PrimaryButton from "../../../../components/ButtonPrimary";
import { ScrollView } from "react-native";
import CardMonitor from "../Components/MonitorCard";



const CallSec = () => {
    const navigation = useNavigation();
    const [selectedType, setSelectedType] = useState("");



    const [Monitores, setMonitores] = useState([
        {
            id: 1,
            nomeMonitor: "Julia Aquino",
            value: "0"
        },
        {
            id: 2,
            nomeMonitor: "Alberto Salvatore",
            value: "0"
        },
        {
            id: 3,
            nomeMonitor: "Calor Luis",
            value: "0"
        },
        {
            id: 4,
            nomeMonitor: "Lara Almeida",
            value: "0"
        },
        {
            id: 5,
            nomeMonitor: "Carol Navino",
            value: "0"
        },
        {
            id: 6,
            nomeMonitor: "Pedro Alves",
            value: "0"
        },
        {
            id: 7,
            nomeMonitor: "Clara Pinto",
            value: "0"
        },
        {
            id: 8,
            nomeMonitor: "Patricia Abravanel",
            value: "0"
        },
        {
            id: 9,
            nomeMonitor: "Roberto Carlos",
            value: "0"
        },
        {
            id: 10,
            nomeMonitor: "Larissa Rego",
            value: "0"
        },
        {
            id: 11,
            nomeMonitor: "João Clava",
            value: "0"
        },
    ]);



    return(
        <ViewBody>
            <ImageBack source={fundo}>
            <BackButton onPress = {() => navigation.navigate("HOMEPAGE")}>
                <IconBackButton source={seta}></IconBackButton>
            </BackButton>
            <ViewHeader>
                <TittleHeader>Monitores</TittleHeader>
                <SubTittleHeader>Selecione a situação de cada monitor abaixo</SubTittleHeader>
            </ViewHeader>
            </ImageBack>
            <InputsContainer>
            <ScrollView style={{backgroundColor: "white", width: 300}}>
                {Monitores.map((itens) => {
                    return(
                        <SelectMonitor>
                            <CardMonitor name={itens.nomeMonitor}></CardMonitor>
                        </SelectMonitor>
                    )
                })}
            </ScrollView>
                  <PrimaryButton label="Tudo Certo"></PrimaryButton>
            </InputsContainer>
        </ViewBody>
    )
}

export default CallSec;