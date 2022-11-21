import React, { useState } from "react";
import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";


const ViewBody = styled.View`
    height: 50px;
    width: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const MonitorName = styled.Text`
    color: black;
    width: 100;
`

const CardMonitor = ({name}) => {
    const [value, setValue] = useState("0")

    return(
        <ViewBody>
            <MonitorName>{name}</MonitorName>
            <Picker style={{width: 150, backgroundColor: "white"}}
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) =>
                        setValue(itemValue)
                    }>
                    <Picker.Item color="black" label="Selecione" value="0" />
                    <Picker.Item color="green" label="Presente" value="1" />
                    <Picker.Item color="red" label="Faltou" value="2" />
                    <Picker.Item color="blue" label="Substuição" value="3" />
                    <Picker.Item color="purple" label="Aula Avulsa" value="4" />

            </Picker>
        </ViewBody>
    )
}

export default CardMonitor;