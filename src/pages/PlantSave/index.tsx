import React, { useState } from 'react';
import {
  Text,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import { loadPlant, PlantProps, savePlant } from '../../assets/libs/storage';
import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Params {
  plant: PlantProps
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android')
      setShowDatePicker(oldState => !oldState);

    if (dateTime)
      setSelectedDateTime(dateTime);
  }

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito Obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlant',
      });
      
    } catch {
      Alert.alert('Não foi possível salvar a planta. 😢')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri={plant.photo}
          height={120}
          width={120}
        />
        <Text style={styles.plantName}>
          {plant.name}
        </Text>
        <Text style={styles.plantAbout}>
          {plant.about}
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image
            source={waterdrop}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>
        <View style={styles.containerDateTime}>
          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
        </Text>
          {
            showDatePicker
            && (
              <DateTimePicker
                value={selectedDateTime}
                mode="time"
                display="spinner"
                onChange={handleChangeTime}
              />
            )
          }
          {
            Platform.OS === 'android' && (
              <TouchableOpacity
                style={styles.dateTimePickerButton}
                onPress={handleOpenDatetimePickerForAndroid}
              >
                <Text style={styles.dateTimePickerText}>
                  {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                </Text>
              </TouchableOpacity>
            )
          }
        </View>
        <Button
          title="Cadastrar planta"
          onPress={handleSave}
        />
      </View>
    </View>
  )
}
