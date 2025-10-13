import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AuthContextList } from "../../context/authContextList";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {

    const { onOpen } = useContext<any>(AuthContextList);

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem} onPress={()=>go("List")}>
          <AntDesign
              name="bars"
              style={{opacity: state.index === 0?1:0.5,color:themas.colors.MidGrey, fontSize:32}}
          />
      </TouchableOpacity>
      <TouchableOpacity style={style.tabItemButton} onPress={onOpen}>
          <View>
              <Entypo
                  name="plus"
                  size={40}
                  color={"#FFF"}
              />
          </View>
          {/* <View>
              <MaterialIcons
                  name="edit"
                  style={{color:'#000'}}
                  size={30}
              />
          </View> */}
      </TouchableOpacity>
      <TouchableOpacity style={style.tabItem} onPress={()=> go("User")}>
          <FontAwesome
              name="user"
              style={{opacity: state.index === 1?1:0.3,color:themas.colors.MidGrey, fontSize:32}}
          />
      </TouchableOpacity>
    </View>
  )
}
