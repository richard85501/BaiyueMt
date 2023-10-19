import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  style,
  size,
  label,
  type,
  onClick,
  icon,
  iconPlace,
  disabled,
  ...props
}) => {
  const buttonStyles = () => {
    let className = styles[`button`];
    if (size) className += ' ' + styles[`button--${size}`];
    if (type) className += ' ' + styles[`button--${type}`];
    if (disabled) className += ' ' + styles[`button--disabled`];
    return className;
  };

  return (
    <button
      type="button"
      className={buttonStyles()}
      onClick={(e) => !disabled && onClick(e)}
      style={style}
      {...props}
    >
      {iconPlace === 'before' ? (
        <>
          {icon} {label}
        </>
      ) : (
        <>
          {label} {icon}
        </>
      )}
    </button>
  );
};

export default Button;
