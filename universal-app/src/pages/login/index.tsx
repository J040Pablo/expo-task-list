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
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { Input } from "../../components/Input"

import { themas } from "../../global/themes";
import { Button } from "../../components/Button";

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(true)

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
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO E-MAIL"
                    IconRigth={MaterialIcons}
                    IconRigthName="email"
                />
                
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title="Senha"
                    IconRigth={Octicons}
                    IconRigthName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBottom}>
                <Button
                    text="Entrar"
                    loading={loading}
                    onPress={()=>getLogin()}
                />
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={{color: themas.colors.ligthBlue}}>Crie agora!</Text></Text>
         </View>
    )
}