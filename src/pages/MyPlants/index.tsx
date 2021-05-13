import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Header } from '../../components/Header';
import colors from '../../styles/colors';
import waterdrop from '../../assets/waterdrop.png';
import { loadPlant, PlantProps, removePlant } from '../../assets/libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import fonts from '../../styles/fonts';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();
  const [withoutPlant, setWithoutPlant] = useState(false);

  async function loadStorageDate() {
    const plantsStored = await loadPlant();

    if (plantsStored.length > 0) {
      const nextTime = formatDistance(
        new Date(plantsStored[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )
      setNextWatered(
        `Não esqueça de regar a ${plantsStored[0].name} à ${nextTime}`
      )
      setMyPlants(plantsStored);
      setLoading(false);
      setWithoutPlant(false);
    } else {
      setNextWatered('Não há planta para ser regada!')
      setWithoutPlant(true);
      setLoading(false);
    }
  }
  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            await removePlant(plant.id);
            loadStorageDate();
          } catch (error) {
            Alert.alert('Não foi possível remover! 😢')
          }
        }
      }
    ])
  }

  useEffect(() => {
    loadStorageDate();
  }, [])

  if (loading)
    return <Load />
  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image
          source={waterdrop}
          style={styles.spotlightImage}
        />
        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>
      <View style={styles.plants}>
        {withoutPlant
          ?
          <Text style={styles.plantsTitle}>
            Não há plantas cadastradas
          </Text>
          :
          <>
            <Text style={styles.plantsTitle}>
              Próximas regadas
            </Text>
            <FlatList
              data={myPlants}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <PlantCardSecondary
                  data={item}
                  handleRemove={() => { handleRemove(item) }}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, paddingBottom:20, }}
            />
          </>

        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    backgroundColor: colors.background,
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,
    width: '100%',
  },
  plantsTitle: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginVertical: 20,
  }
});