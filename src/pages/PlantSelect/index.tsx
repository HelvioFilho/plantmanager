import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { EnvironmentButton } from '../../components/Environment';

import { Load } from '../../components/Load';
import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import api from '../../services/api';

import { styles } from './style';

interface EnvironmentProps {
  key: string,
  title: string,
}

interface PlantsProps {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: [string],
  frequency: {
    times: number,
    repeat_every: string,
  }
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment == 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ]);
    }

    fetchEnvironment();
  }, [])

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants?_sort=name&_order=asc');
      setPlants(data);
      setFilteredPlants(data);
      setLoading(false);
    }

    fetchPlants();
  }, [])

  if(loading)
  return <Load />
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

          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList

          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}