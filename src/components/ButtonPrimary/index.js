import React from "react";
import { ButtonBody, TextButton } from "./styled";




const PrimaryButton = ({label, marginTops,onPress,disabled}) => {

    return(
        <ButtonBody style={{marginTop: marginTops}}
        onPress={onPress}
        disabled={disabled}
        >
            <TextButton>{label}</TextButton>
        </ButtonBody>
    )
}

export default PrimaryButton;