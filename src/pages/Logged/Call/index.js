import React, { useContext, useState } from "react";
import fundo from "../../../assets/imgs/FundoHome.png"
import GlobalStateContext from "../../../GlobalState/GlobalStateContext";
import seta from "../../../assets/icons/setaPreta.png"
import { useNavigation } from "@react-navigation/native";
import { BackButton, IconBackButton, ImageBack, InputsContainer, SelectPicker, SubTittleHeader, TittleHeader, ViewBody, ViewHeader } from "./styled";
import { Picker } from "@react-native-picker/picker";
import PrimaryButton from "../../../components/ButtonPrimary";




const CallFirst = () => {

    const {setUsersInfos,userInfos } = useContext(GlobalStateContext);
    const navigation = useNavigation();
    const [selectedType, setSelectedType] = useState("");



    const turmas = [
        {
            id: 1,
            nomeTurma: "Forró Pé de Serra/Roots - seg/qua - 21h"
        },
        {
            id: 2,
            nomeTurma: "Forró Pé de Serra/Roots - ter/qui - 19h30"
        },
        {
            id: 3,
            nomeTurma: "Samba de Gafieira - seg/qua - 20h"
        },
        {
            id: 4,
            nomeTurma: "Zouk Brasileiro - ter/qui - 21h"
        },
        {
            id: 5,
            nomeTurma: "Forró Pé de Serra/Roots -seg/qua - 21h"
        },

    ]



    return(
        <ViewBody>
            <ImageBack source={fundo}>
            <BackButton onPress = {() => navigation.navigate("HOMEPAGE")}>
                <IconBackButton source={seta}></IconBackButton>
            </BackButton>
            <ViewHeader>
                <TittleHeader>Presente!</TittleHeader>
                <SubTittleHeader>Selecione a turma abaixo para fazer a chamada</SubTittleHeader>
            </ViewHeader>
            </ImageBack>
            <InputsContainer>
                <SelectPicker>
                <Picker style={{width: 270, backgroundColor: "white"}}
                    selectedValue={selectedType}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedType(itemValue)
                    }>
                    {turmas.map((itens) => {
                        return(
                            <Picker.Item label={itens.nomeTurma} value={itens.nomeTurma} />
                        )
                    })}
                  </Picker>
                  </SelectPicker>
                  <PrimaryButton onPress={()=> navigation.navigate("CALLSEC")} label="Fazer Chamada"></PrimaryButton>
            </InputsContainer>
        </ViewBody>
    )
}

export default CallFirst;