import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
  text: string;
  loading?: boolean;
};

export function Button({ text, loading, ...rest }: Props) {
  return (
    <TouchableOpacity
        style={style.button}
        {...rest}
        activeOpacity={0.6}
    >
      {loading ? (
        <ActivityIndicator color="#fff"/>
      ) : (
        <Text style={style.textButton}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
