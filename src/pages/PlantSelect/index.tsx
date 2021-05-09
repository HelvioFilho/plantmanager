import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { EnvironmentButton } from '../../components/Environment';

import { Header } from '../../components/Header';
import { styles } from './style';

export function PlantSelect() {
  return (
    <SafeAreaView style={styles.container}>

      <View>
        <View style={styles.header}>
          <Header />
          <Text style={styles.title}>
            Em qual ambiente
          </Text>
          <Text>
            você quer colocar sua planta?
          </Text>
        </View>
      </View>
        <EnvironmentButton title="Cozinha" active />
    </SafeAreaView>
  );
}