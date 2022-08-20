import React from 'react';
import {TextInputProps} from 'react-native';
import colors from '../../styles';

// utils
import {maskCep, maskPhone, maskCurrency} from '../../utils/mask';

// Styles
import {
  Container,
  Label,
  InputContent,
} from './styles';

// Icons

// Props
interface InputProps extends TextInputProps {
  mask?: 'cep' | 'currency' | 'phone';
  label: string;
  placeholder?: string;
  message?: string;
  ref?: React.RefObject<any>;
  inputMaskChange?: any;
}

const Input: React.FC<InputProps> = props => {
  const {label, placeholder} = props;

  // const handleChange = (text: string) => {
  //   if(mask === 'cep') {
  //     const value = maskCep(text);
  //     inputMaskChange(value);
  //   } 
  //   if (mask === 'phone') {
  //     const value = maskPhone(text);
  //     inputMaskChange(value);
  //   } 
  //   if (mask === 'currency') {
  //     const value = maskCurrency(text);
  //     inputMaskChange(value);
  //   } 

  // }

  return (
    <Container 
      label={label}
    >
      <Label>{label}</Label>
        <InputContent
          placeholder={placeholder}
          placeholderTextColor={colors.gray300}
          // onChangeText={(text) => handleChange(text)}
        {...props} 
      />
    
  </Container>
  );
};

export default Input;