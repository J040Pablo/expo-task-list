import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from "react-native";

import { style } from './style';
import Logo from "../../assets/React-icon.svg";

export default function Login () {
    return (
         <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                    />
                    <Text style={style.text}>Bem Vindo!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de e-mail</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                    />
                    <Text>Ola</Text>
                </View>
                <TextInput/>
                <Text style={style.titleInput}>Senha</Text>
                <TextInput/>
            </View>
            <View style={style.boxBottom}>
                <Text>Bottom</Text>
            </View>
         </View>
    )
}