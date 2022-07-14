import React from "react";
import { ButtonBody, ImgButton } from "./styled";
import seta from "../../assets/icons/seta1.png"




const BackButton = ({label, marginTops,onPress,disabled}) => {

    return(
        <ButtonBody style={{marginTop: marginTops}}
        onPress={onPress}
        disabled={disabled}
        >
            <ImgButton source={seta}></ImgButton>
        </ButtonBody>
    )
}

export default BackButton;