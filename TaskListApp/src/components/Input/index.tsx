import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import React, { forwardRef, Ref } from "react";
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { themas } from "../../global/themes";

type IconComponent =
  | typeof MaterialIcons
  | typeof FontAwesome
  | typeof Octicons;

type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRigth?: IconComponent;
  IconLeftName?: string;
  IconRigthName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRigthPress?: () => void;
  height?: number;
  labelStyle?: StyleProp<TextStyle>;
};

export const Input = forwardRef<TextInput, Props>(
  (props, ref: Ref<TextInput>) => {
    const {
      IconLeft,
      IconRigth,
      IconLeftName,
      IconRigthName,
      title,
      onIconLeftPress,
      onIconRigthPress,
      labelStyle,
      height,
      ...rest
    } = props;

const calculateSizeWidth = () =>{
  if(IconLeft && IconRigth) {
    return '80%';
  } else if (IconRigth || IconRigth) {
    return '90%';
  } else {
    return '100%';
  }
}


const calculateSizePaddingLeft = () =>{
  if(IconLeft && IconRigth) {
    return 0;
  } else if (IconRigth || IconRigth) {
    return 10;
  } else {
    return 20;
  }
}    

    return (
      <>
        {title && <Text style={[style.titleInput, labelStyle]}>{title}</Text>}
        <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft(),height:height || 40 }]}>
          {IconLeft && IconLeftName && (
            <TouchableOpacity style={style.Button}>
              <IconLeft
                name={IconLeftName as any}
                size={20}
                color={themas.colors.grey}
                style={style.Icon}
                onPress={onIconLeftPress}
              />
              
            </TouchableOpacity>
          )}

          <TextInput
            ref={ref}
            style={[
              style.input,{width:calculateSizeWidth(), height:'100%'}
            ]}
            placeholderTextColor={themas.colors.grey}
            {...rest}
          />

          {IconRigth && IconRigthName && (
            <TouchableOpacity style={style.Button}>
              <IconRigth
                name={IconRigthName as any}
                size={20}
                color={themas.colors.grey}
                onPress={onIconRigthPress}
                style={style.Icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  }
);
