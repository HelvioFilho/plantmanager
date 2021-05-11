import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Alert,
} from 'react-native';
import colors from '../../styles/colors';
import { Button } from '../Button';
import { styles } from './style';
interface ModalProps {
  visible: boolean,
  close: () => void,
  passName: (op: string) => void,
}

export function ModalContainer({ visible, close, passName }: ModalProps){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

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
  return(
    <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}
        onRequestClose={close}
      >
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.container} >
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
  );
}