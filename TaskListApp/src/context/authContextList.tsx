import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { createContext, useContext, useEffect, useState } from "react";
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropCard } from "../global/Props";

export const AuthContextList: any = createContext({});

const Flags = [
  { caption: "Urgente", color: themas.colors.red },
  { caption: "Opcional", color: themas.colors.ligthBlue },
];

export const AuthProviderList = (props: any) => {
  type TaskItem = {
    item: number;
    id?: number;
    title?: string;
    description?: string;
    flag?: string;
    tempoLimite?: string;
  };

  const modalizeRef = React.createRef<Modalize>();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedFlag, setSelectedFlag] = React.useState("Urgente");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);
  const [item, setItem] = useState<number>(0);
  const [taskList, setTaskList] = useState<TaskItem[]>([]);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  useEffect(() => {
    const loadAndNormalize = async () => {
      try {
        const storageData = await AsyncStorage.getItem('taskList');
        let parsed = null;
        try {
          parsed = storageData ? JSON.parse(storageData) : null;
        } catch (e) {
          console.log('Erro ao parsear taskList no load inicial:', e);
          parsed = null;
        }

        let list = [];
        if (Array.isArray(parsed)) {
          list = parsed;
        } else if (parsed && Array.isArray(parsed.taskList)) {
          list = parsed.taskList;
        } else if (parsed && typeof parsed === 'object') {
          list = [parsed];
          // Persistir a migração
          await AsyncStorage.setItem('taskList', JSON.stringify(list));
        } else {
          list = [];
        }

        setTaskList(list);
      } catch (e) {
        console.log('Erro ao carregar taskList inicial:', e);
      }
    };

    loadAndNormalize();
  }, []);

  useEffect(() => {
    get_taskList();
  }, []);

  
  const _renderFlag = () => {
    return Flags.map((item, index) => (
      <TouchableOpacity key={index}
      onPress={() => 
        setSelectedFlag(item.caption)}
        >
          <Flag
            caption={item.caption}
            color={item.color}
            selected={item.caption === selectedFlag}
            />
        </TouchableOpacity>
      ));
    };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

const handleTimeChange = (time: Date) => {
  setSelectedTime(time);
};

const handleSave = async () => {
  if (!title || !description || !selectedFlag) {
    return Alert.alert("Erro", "Por favor, preencha todos os campos.");
  }
  try {
    const newItem = {
      item: item !== 0 ? item : Date.now(),
      title,
      description,
      flag: selectedFlag,
      tempoLimite: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        selectedTime.getHours(),
        selectedTime.getMinutes()
      ).toISOString(),
    };

    const storageData = await AsyncStorage.getItem("taskList");
    let taskList: Array<any> = storageData ? JSON.parse(storageData) : [];

    const itemIndex = taskList.findIndex((task) => task.item === newItem.item);
    
    if(itemIndex >= 0){
      taskList[itemIndex] = newItem;
    } else {
      taskList.push(newItem);
    }

    await AsyncStorage.setItem("taskList", JSON.stringify(taskList));

    setTaskList(taskList);
    setData();
    onClose();
    
  } catch (error) {
    console.log("Error ao salvar o Item:", error);
  }
};

const setData = () => {
  setTitle("");
  setDescription("");
  setItem(0);
  setSelectedFlag("Urgente");
  setSelectedDate(new Date());
  setSelectedTime(new Date());
}

async function get_taskList() {
  try {
    const storageData = await AsyncStorage.getItem("taskList");
    const parsed = storageData ? JSON.parse(storageData) : [];
    setTaskList(Array.isArray(parsed) ? parsed : []);
  } catch (error) {
    console.log("Error ao obter taskList:", error);
  }
}

const handleDelete = async (itemToDelete: { item: number } | TaskItem) => {
  try {
    const storageData = await AsyncStorage.getItem("taskList");
    const taskList: TaskItem[] = storageData ? JSON.parse(storageData) : [];

    const updatedTaskList = taskList.filter((t) => {
      if (typeof t.item === "number") return t.item !== itemToDelete.item;
      if (typeof t.id === "number") return t.id !== itemToDelete.item;
      return true;
    });

    await AsyncStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    setTaskList(updatedTaskList);
  } catch (error) {
    console.log("Error ao deletar o Item:", error);
  }
};

const handleEdit = async (itemToEdit: PropCard) => {
  try {
    setTitle(itemToEdit.title);
    setDescription(itemToEdit.description);
    setItem(itemToEdit.item);
    setSelectedFlag(itemToEdit.flag);

    const timeLimit = new Date(itemToEdit.timeLimit);
    setSelectedDate(timeLimit);
    setSelectedTime(timeLimit);
    
    onOpen();

  } catch (error) {
    console.log("Error ao editar o Item:", error);
  }
}

const _container = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onClose()}>
          <MaterialIcons name="close" size={30} />
        </TouchableOpacity>

        <Text style={styles.title}>Criar tarefa</Text>
        <TouchableOpacity onPress={() => handleSave()}>
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
  <AuthContextList.Provider value={{ onOpen, taskList, handleDelete, handleEdit }}>
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
