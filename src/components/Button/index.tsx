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
  color?: string,
  modal?: boolean,
}

export function Button({ title, color, modal, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        [styles.button ,
          (title == ">") && styles.buttonChevron,
          (modal)? styles.buttonModal : styles.buttonTotal,
          (color) ? styles.cancel : styles.main,
        ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={(modal)? styles.textModal : styles.buttonText}>
       {(title == ">") ? <Feather name="chevron-right" style={styles.buttonIcon} /> : title}
      </Text>
    </TouchableOpacity>
  );
}