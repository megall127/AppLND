import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "../pages/Unloged/Login";
import RegisterIndex from "../pages/Unloged/Register";
import FirstStepRegister from "../pages/Unloged/Register/Steps/fisrtStep";
import SecondStep from "../pages/Unloged/Register/Steps/secondStep";
import HomePage from "../pages/Logged/HomePage";

const Router = () => {


    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                              headerShown: false }}
                               initialRouteName="LOGINN">
            <Stack.Screen name="LOGINN" component={LoginPage} />
            <Stack.Screen name="REGISTER" component={RegisterIndex} />
            <Stack.Screen name="FIRSTSTEP" component={FirstStepRegister} />
            <Stack.Screen name="SECONDTSTEP" component={SecondStep} />
            <Stack.Screen name="HOMEPAGE" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;