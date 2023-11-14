import { Alert, StyleSheet, View } from 'react-native';
import React from 'react';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FONT_FAMILY_BOLD, FONT_FAMILY_MEDIUM } from '../utils/FontFamily';
import { useSelector } from 'react-redux';

export function Confirm(props) {

  const session = useSelector((state) => state.session)

  return (
    <ConfirmDialog
      title={props.title}
      message={props.message}
      visible={true}
      positiveButton={{
        title: 'YES',
        onPress: () => props.onSubmit(),
      }}
      negativeButton={{
        title: 'NO',
        onPress: () => props.cancel(),
      }}
    />
  );
}

export const Message = (head, msg) => {
  Alert.alert(head, msg, [{ text: 'Okay' }]);
};

export function ErrorMessage(props) {
  const session = useSelector((state) => state.session)

  return (

    <ConfirmDialog visible={true} style={styles.dialogStyle}>

      <View style={{ minHeight: "20%" }}>
        <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
        <Text allowFontScaling={false} style={styles.message}>{props.message} </Text>

        <TouchableOpacity onPress={() => props.onClearError()} style={styles.okContainer}>
          <Text allowFontScaling={false} style={styles.okText}>OK</Text>
        </TouchableOpacity>

      </View>

    </ConfirmDialog>

  );
}
const styles = StyleSheet.create({
  contentStyle: {
    padding: 20,
  },
  dialogStyle: {
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
    textAlign: 'center',
  },
  okButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 6,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: 20
  },
  message: {
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: 15,
    marginVertical: "5%"
  },
  okContainer: {
    padding: 5,
    width: "30%",
    alignSelf: "flex-end"
  },
  okText: {
    textAlign: "right",
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: 16
  },

});