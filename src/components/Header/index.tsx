import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './style';
import userImg from '../../assets/user.png';
import colors from '../../styles/colors';
import { Button } from '../Button';

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState<string>();
  // const navigation = useNavigation();

  function show() {
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  function passName(name: string) {
    setUserName(name);
  }
  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function reset(){
    setIsFocused(false);
    setIsFilled(false);
    close();
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Aviso!','Me diz como chamar você 😥');

    await AsyncStorage.setItem('@plantmanager:user', name);
    passName(name);
    setName('');
    close();
  }

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantmanager:user');
    setUserName(user || '');
  }
  useEffect(() => {
    loadStorageUserName();
  }, [])
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
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}
        onRequestClose={close}
      >
        <TouchableWithoutFeedback onPress={close}>
          <View style={[styles.containerModal]} >
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.bodyModal}>
          <View>
            <Text style={styles.title}>
              Mudança de nome
              </Text>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder="Digite o novo nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
          </View>
          <View style={styles.footer}>
            <Button
              title="Cancelar"
              color="cancel"
              modal={true}
              onPress={reset}
            />
            <Button
              title="Confirmar"
              modal={true}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </Modal>     
    </View>
  );
}