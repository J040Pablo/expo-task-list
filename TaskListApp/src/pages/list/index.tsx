import React from "react";
import { FlatList, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { style } from "./style";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

type PropCard = {
    item: number;
    title: string;
    description: string;
    flag: "urgente"|"opcional";
}
const data:Array<PropCard> =
[
    {
        item: 0,
        title: "Realizar lição de casa",
        description: "Comprar frutas, legumes e verduras",
        flag: "urgente"
    },
    {
        item: 1,
        title: "Ir ao mercado",
        description: "Comprar frutas, legumes e verduras",
        flag: "urgente"
    },
    {
        item: 2,
        title: "Ir tomar açaí",
        description: "Comprar frutas, legumes e verduras",
        flag: "urgente"
    }
]

export default function List () {

    const _renderCard = (item: PropCard) => {
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                            <Ball color="red"/>
                        <View>
                            <Text style={style.titleCard}>{item.title}</Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                        </View>
                    </View>
                    <View style={style.rowCardRight}>
                        <Flag caption="Urgente" color={themas.colors.red}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>
                    Bom dia,<Text style={{fontWeight: "bold"}}> Calors E</Text>
                </Text>
                <View>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={data}
                    style={{marginTop: 40, paddingHorizontal: 30}}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({item}) => _renderCard(item)}
                />
            </View>
        </View>
    );
}