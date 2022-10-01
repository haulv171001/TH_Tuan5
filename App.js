import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,Button} from 'react-native';
import Sreen1  from './component/sreen1';
import Sreen2 from './component/sreen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginVertical:15}}>Home Screen</Text>
      <Button
        style={{marginVertical:15}}
        title="Go to LISTVIEW"
        onPress={() => navigation.navigate('LISTVIEWS')}
      />
       <Button
        style={{marginVertical:15}}
        title="Go to GRIDVIEW"
        onPress={() => navigation.navigate('GRIDVIEWS')}
      />
    </View>
  );
}
export default function App() {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LISTVIEWS" component={Sreen1} />
          <Stack.Screen name="GRIDVIEWS" component={Sreen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
