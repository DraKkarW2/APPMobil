import * as React from 'react';
import { StyleSheet,RefreshControl, SafeAreaView, ScrollView } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import StateApp from '../components/AppSate';
import { Text, View,  } from '../components/Themed';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { deg } from 'react-native-linear-gradient-degree';




const wait = (timeout: any) => {
  console.log("refresh");
  return new Promise(resolve => setTimeout(resolve, timeout));
  
}

const Tab = createStackNavigator();
const ParametersStack = createStackNavigator();

export default function TabOneScreen({navigation}: {navigation: any}) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    
    <View style={styles.container}>
       <SafeAreaView style={styles.container}>
       <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />

      <StateApp></StateApp>
      </ScrollView>
      </SafeAreaView>
    </View>
   
  );
}
console.log(deg(39.99));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


