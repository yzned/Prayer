import React, {useState} from 'react';
import {View, TextInput, Text, ImageSourcePropType} from 'react-native';

import {getStyles} from './styles';
import {colors} from '../../Colors/colors';
import SvgCheck from '../../../../--no-index/check';

interface TextInputProps {
  label?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  source?: ImageSourcePropType;
  isError?: boolean;
  isPassword?: boolean;
  icon?: React.ReactNode;
  editable?: boolean;
  onChange?: () => void;
  onBlur?: () => void;
  onPress?: () => void;
  multiline?: boolean;
  isActive?: boolean;
  isRequired?: boolean;
}
export const Input = (props: TextInputProps) => {
  const {
    label,
    defaultValue,
    placeholder,
    isError,
    icon,
    isActive,
    editable,
    isPassword,
    value,
    multiline,
    onChange,
    onBlur,
    onPress,
    isRequired,
    ...inputProps
  } = props;
  const styles = getStyles(colors);

  const handleIsValidText = () => {
    if (value && !isError && isRequired) {
      return styles.validText;
    }
  };
  const handleIsValidBorder = () => {
    if (value && !isError && isRequired) {
      return styles.validBorder;
    }
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, isError && styles.errorLabel]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.border,
          isError && styles.borderError,
          isActive && styles.activeBorder,
          handleIsValidBorder(),
        ]}>
        <TextInput
          onPressIn={onPress}
          style={[
            styles.input,
            isError ? styles.errorInput : handleIsValidText(),
          ]}
          secureTextEntry={isPassword}
          onChangeText={onChange}
          onBlur={onBlur}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={!isError ? '#9B9B9B' : '#C2534C'}
          {...inputProps}
          editable={editable}
          multiline={multiline}
        />
        {handleIsValidText() ? (
          <View style={styles.check}>
            <SvgCheck />
          </View>
        ) : (
          icon
        )}
      </View>
    </View>
  );
};
