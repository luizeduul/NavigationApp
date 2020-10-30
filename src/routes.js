import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Techs from './pages/Techs';
import TechDetails from './pages/TechDetails';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <Navigator>
      <Screen
        name="Techs"
        component={Techs}
        options={{
          title: 'Techs',
          headerTitleAlign: 'center',
        }}
      />
      <Screen
        name="TechDetails"
        component={TechDetails}
        options={{
          title: 'Detalhes',
          headerTitleAlign: 'center',
        }}
      />
    </Navigator>
  );
};

export default Routes;
