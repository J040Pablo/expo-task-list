import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { createContext, useContext, useEffect } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Input } from "../components/Input";
import { themas } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTimePicker from "../components/CustomDataTimePicker";

export const AuthContextList: any = createContext({});

const Flags = [
  { caption: "Urgente", color: themas.colors.red },
  { caption: "Opcional", color: themas.colors.ligthBlue },
];

export const AuthProviderList = (props: any) => {
  const modalizeRef = React.createRef<Modalize>();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedFlag, setSelectedFlag] = React.useState("Urgente");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  useEffect(() => {
    onOpen();
  }, []);

  const _renderFlag = () => {
    return Flags.map((item, index) => (
      <TouchableOpacity key={index}>
        <Flag caption={item.caption} color={item.color} />
      </TouchableOpacity>
    ));
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: Date) => {
    setSelectedTime(time);
  };

  const _container = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>Criar tarefa</Text>
          <TouchableOpacity>
            <AntDesign name="check" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Input
            title="Título:"
            labelStyle={styles.label}
            value={title}
            onChangeText={setTitle}
          />
          <Input
            title="Descrição:"
            labelStyle={styles.label}
            value={description}
            onChangeText={setDescription}
            height={100}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />

          <View style={{ flexDirection: "row", gap: 10, width: "100%" }}>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={{ flex: 1 }}
            >
              <Input
                title="Data Limite:"
                labelStyle={styles.label}
                editable={false}
                value={selectedDate.toLocaleDateString()}
                onPress={() => setShowDatePicker(true)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={{ width: 120 }}
            >
              <Input
                title="Hora Limite:"
                labelStyle={styles.label}
                editable={false}
                value={selectedTime.toLocaleTimeString()}
                onPress={() => setShowTimePicker(true)}
              />
            </TouchableOpacity>
          </View>


          <CustomDateTimePicker
            onDateChange={handleDateChange}
            setShow={setShowDatePicker}
            show={showDatePicker}
            type="date"
          />

          <CustomDateTimePicker
            onDateChange={handleTimeChange}
            setShow={setShowTimePicker}
            show={showTimePicker}
            type="time"
          />

          <View style={styles.containerFlag}>
            <Text style={styles.label}>Flags:</Text>
            <View style={styles.rowFlags}>{_renderFlag()}</View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        avoidKeyboardLikeIOS={true}
        keyboardAvoidingBehavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardAvoidingOffset={Platform.OS === "ios" ? 150 : 100}
        handlePosition="inside"
        childrenStyle={{
          height: Dimensions.get("window").height / 1.7,
        }}
      >
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    width: "100%",
    height: 40,
    paddingHorizontal: 40,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
  },
  containerFlag: {
    width: "100%",
    padding: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#000",
  },
  rowFlags: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});
