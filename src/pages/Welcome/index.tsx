import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import watering from '../../assets/watering.png'
import { Button } from '../../components/Button';
import { styles } from './style';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
        suas plantas de{'\n'}
        forma fácil
      </Text>
        <Image
          source={watering}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>
        <Button
          title=">"
          onPress={handleStart}
        />
      </View>
    </SafeAreaView>
  )
}