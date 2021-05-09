import React from 'react';
import {
  FlatList,
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
      <View>
        <FlatList
         
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={() => (
            <EnvironmentButton title="Cozinha" active />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </SafeAreaView>
  );
}