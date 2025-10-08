import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";

import { style } from './style';
import Logo from "../../assets/React-icon.png";
import { MaterialIcons } from '@expo/vector-icons';

import { themas } from "../../global/themes";

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function getLogin() {
        try {
            setLoading(true)

            if(!email || !password) {
                return Alert.alert("Atenção", "Informe os campos Obrigatorios")
            }

            setTimeout(() => {
                if(email =='adm@gmail.com' && password=='adm')
                    Alert.alert("Logado Com Sucesso!")
                else{
                    Alert.alert("Usuario não encontrado!")
                }
                setLoading(false)
            }, 3000);

        } catch (error) {
            console.log("error")
        }
    }

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
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.grey}
                    />
                </View>
                <Text style={style.titleInput}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themas.colors.grey}
                    />
                    </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                        loading?
                            <ActivityIndicator color={'#FFF'} size={"small"}/>
                        :
                            <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={{color: themas.colors.ligthBlue}}>Crie agora!</Text></Text>
         </View>
    )
}