import React, { useContext, useRef } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Input } from "../../components/Input";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContextList";
import { AuthContextType, PropCard } from "../../global/Props";
import { formatDateToBR } from "../../global/Functions";
import { Swipeable } from "react-native-gesture-handler";

export default function List() {
  const { taskList, handleDelete, handleEdit } = useContext<AuthContextType>(AuthContextList);
  const swipeableRefs = useRef<Swipeable[]>([]);

    const renderRightActions = () => {
        return (
        <View style={style.button}>
            <AntDesign
                name="delete"
                size={20}
                color="#FFF"
            />
        </View>
        );
    };

    const renderLeftActions = () => {
        return (
            <View style={[style.button, { backgroundColor: themas.colors.ligthBlue }]}>
                <AntDesign
                    name="edit"
                    size={20}
                    color="#FFF"
                />
            </View>
        );
    };

    const handleSwipeableOpen = (directions: 'right' | 'left', item: PropCard, index: number) => {
      if (directions === 'right') {
        handleDelete(item);
      } else {
        handleEdit(item);
      }
      swipeableRefs.current[index]?.close();
    }

  const _renderCard = (item: PropCard, index: number) => {
    const color =
      item.flag === "opcional" ? themas.colors.ligthBlue : themas.colors.red;

    return (
      <Swipeable
        ref={(ref) => {
          if (ref) swipeableRefs.current[index] = ref;
        }}
        key={index}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableWillOpen={(directions)=> handleSwipeableOpen(directions, item, index)}
      >
        <View style={style.card}>
          <View style={style.rowCard}>
            <View style={style.rowCardLeft}>
              <Ball color={color} />
              <View>
                <Text style={style.titleCard}>{item.title}</Text>
                <Text style={style.descriptionCard}>{item.description}</Text>
                <Text style={style.descriptionCard}>
                  até {formatDateToBR(item.timeLimit)}
                </Text>
              </View>
            </View>
            <View style={style.rowCardRight}>
              <Flag caption={item.flag} color={color} />
            </View>
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.greeting}>
          Bom dia,<Text style={{ fontWeight: "bold" }}> Carlos E</Text>
        </Text>
        <View>
          <Input IconLeft={MaterialIcons} IconLeftName="search" />
        </View>
      </View>

      <View style={style.boxList}>
        <FlatList
          data={taskList}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => _renderCard(item, index)}
        />
      </View>
    </View>
  );
}
