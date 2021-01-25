import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {colors} from '../../../config/colors';

const Input = ({placeholder, select, selectItem, label}) => {
  if (select) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker>
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
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="silver"
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'silver',
    padding: 11,
    fontSize: 15,
    color: colors.text.utama,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 10,
    paddingHorizontal: 4,
    color: colors.text.utama,
  },
  label: {
    fontSize: 16,
    color: colors.text.utama,
    marginBottom: 4,
  },
});
