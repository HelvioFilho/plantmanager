import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string,
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button ,(title === ">") ? styles.buttonChevron : styles.buttonTotal]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>
       {(title === ">") ? <Feather name="chevron-right" style={styles.buttonIcon} /> : title}
      </Text>
    </TouchableOpacity>
  );
}