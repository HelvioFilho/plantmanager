import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';

const stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stack.Screen
      name="Welcome"
      component={Welcome}
    />
    <stack.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stack.Screen
      name="Confirmation"
      component={Confirmation}
    />
    <stack.Screen
      name="PlantSelect"
      component={PlantSelect}
    />

  </stack.Navigator>
)

export default AppRoutes;