import React from 'react';
import {Button as ButtonPaper} from 'react-native-paper';
import {colors} from '../../../config/colors';

const Button = ({onPress, label, icon, disabled}) => {
  return (
    <ButtonPaper
      icon={icon}
      mode="contained"
      color={colors.primary}
      onPress={onPress}
      disabled={disabled}>
      {label}
    </ButtonPaper>
  );
};

export default Button;
