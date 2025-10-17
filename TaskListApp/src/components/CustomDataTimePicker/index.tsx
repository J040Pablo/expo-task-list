import React, { useEffect } from "react";
import { Modal, Platform, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import styles from "./styles";

const CustomDateTimePicker = ({
  type,
  onDateChange,
  show,
  setShow,
}: {
  type: "date" | "time";
  onDateChange: (date: Date) => void;
  show: boolean;
  setShow: (value: boolean) => void;
}) => {
  const [date, setDate] = React.useState(new Date());

    useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange]);
  
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "dismissed") {
      setShow(false);
      return;
    }

    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    onDateChange(currentDate);
  };

  return (
    <Modal transparent visible={show} onRequestClose={() => setShow(false)}>
      <View style={styles.ModalOverlay}>
        <View style={[
            styles.Container,
            Platform.OS == "android" &&{backgroundColor:'transparent'}
            
            ]}>
          <DateTimePicker
            value={date}
            mode={type}
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={onChange}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomDateTimePicker;
