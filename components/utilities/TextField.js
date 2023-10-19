import styles from './TextField.module.scss';
import { useState, useEffect } from 'react';

const TextField = (props) => {
  const {
    value,
    type,
    placeholder,
    onChange,
    onBlur,
    onKeyPress,
    disabled,
    paddingIcon,
    inputType,
    light,
    error,
    maxLength,
    style,
  } = props;

  return (
    <input
      disabled={disabled}
      id="textInput"
      className={
        type === 'small' ? styles.smallTextField : styles.textField
      }
      placeholder={placeholder ? placeholder : '請輸入'}
      value={value}
      onChange={(e) => onChange(e)}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      type={inputType ? inputType : 'text'}
      maxLength={maxLength}
      style={
        paddingIcon && light
          ? { paddingRight: '47px', background: 'white' }
          : paddingIcon
          ? { paddingRight: '47px' }
          : error
          ? {
              border: '1px solid #ff3b30',
            }
          : style
      }
    />
  );
};

export default TextField;
