import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons'; 

import { styles } from './style';
import userImg from '../../assets/user.png';
import { ModalContainer } from '../ModalContainer';

export function Header() {
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState<string>();
  // const navigation = useNavigation();

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantmanager:user');
    setUserName(user || '');
  }
  useEffect(() => {
    loadStorageUserName();
  }, [])

  function show() {
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  function passName(name: string){
    setUserName(name);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.userName} onPress={show}>
          {userName} <MaterialIcons name="edit" style={styles.buttonIcon} />
        </Text>
      </View>
      <Image source={userImg} style={styles.image} />
      <ModalContainer 
        visible={visible} 
        close={close}
        passName={passName}
        />
    </View>
  );
}