import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";

export default function Routes() {
    const stack = createStackNavigator()

    return (
        <stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:"#FFF"
                }
            }}
        >
            <stack.Screen
                name="Login"
                component={Login}
            />
            <stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
        </stack.Navigator>
    )
}