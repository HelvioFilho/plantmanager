import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import { styles } from './style';
import userImg from '../../assets/user.png';
export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.userName}>
          Hélvio
        </Text>
      </View>
      <Image source={userImg} style={styles.image}/>
    </View>
  );
}