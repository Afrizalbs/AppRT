import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {TextInput as InputPaper} from 'react-native-paper';
import {colors} from '../../../config/colors';

const Input = ({
  select,
  label,
  onChangeText,
  value,
  onValueChange,
  selectItem,
  selectedValue,
  keyboardType,
  secureTextEntry,
}) => {
  if (select) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker onValueChange={onValueChange} selectedValue={selectedValue}>
            {selectItem.map((item) => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }
  return (
    <>
      <InputPaper
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        keyboardType={keyboardType}
        style={styles.input}
        activeOutlineColor={colors.primary}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.text.primary,
    borderRadius: 5,
    paddingHorizontal: 4,
    color: colors.text.primary,
  },
  label: {
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 4,
  },
});
