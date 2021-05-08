import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import watering from '../../assets/watering.png'
import { Button } from '../../components/Button';
import { styles } from './style';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Text>
      <Image
        source={watering}
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <Button title="Avançar"/>

    </SafeAreaView>
  )
}