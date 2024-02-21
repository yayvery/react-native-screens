import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import { Button } from '../shared';
import BottomSheet from '@gorhom/bottom-sheet';

type StackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
};

interface MainScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'ScreenA'>;
}

const App = ({ navigation }: MainScreenProps): JSX.Element => {
  const snapPoints = React.useMemo(() => ['50%', '80%'], []);

  return (
    <View style={{ ...styles.container, backgroundColor: 'moccasin' }}>
      <Button onPress={() => navigation.pop()} title="🔙 Back to Examples" />

      <BottomSheet index={1} snapPoints={snapPoints}>
        <StackNav />
      </BottomSheet>
    </View>
  );
};

interface ScreenAProps {
  navigation: NativeStackNavigationProp<StackParamList, 'ScreenA'>;
}

const ScreenA = ({ navigation }: ScreenAProps): JSX.Element => (
  <View style={{ ...styles.container, backgroundColor: 'thistle' }}>
    <Button title="Go ScreenB" onPress={() => navigation.navigate('ScreenB')} />
  </View>
);

interface ScreenBProps {
  navigation: NativeStackNavigationProp<StackParamList, 'ScreenB'>;
}

const ScreenB = ({ navigation }: ScreenBProps): JSX.Element => (
  <View style={{ ...styles.container, backgroundColor: 'blue' }}>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

const Stack = createNativeStackNavigator<StackParamList>();

const StackNav = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="ScreenA" component={ScreenA} />
    <Stack.Screen
      name="ScreenB"
      component={ScreenB}
      options={{
        goBackGesture: 'swipeRight',
      }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default App;
