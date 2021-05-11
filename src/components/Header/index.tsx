import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons'; 

import { styles } from './style';
import userImg from '../../assets/user.png';
import colors from '../../styles/colors';
import { Button } from '../Button';


export function Header() {
  const deviceHeight = Dimensions.get("window").height;
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState<string>();
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

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

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Aviso!','Me diz como chamar você 😥');

    await AsyncStorage.setItem('@plantmanager:user', name);
    setUserName(name);
    setName('');
    close();
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
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}
        onRequestClose={close}
      >
        {/* {renderOutsideTouchable()} */}
        <TouchableWithoutFeedback onPress={close}>
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'center' }} >
          </View>
        </TouchableWithoutFeedback>
        <View style={{
          position: 'absolute',
          top: "30%",
          backgroundColor: '#ffffff',
          width: '100%',
          borderRadius: 20,
          paddingHorizontal: 40,
          paddingVertical: 20,
          maxHeight: deviceHeight * 0.4
        }}>
          <View>
            <Text style={{ textAlign: 'center', color: '#182e44', fontSize: 20, fontWeight: '500' }}>
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
              onPress={close}
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