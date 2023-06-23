import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

import { useState } from 'react';
import PlateButton from './components/Button/Button';
import Switch from './components/Switch/Switch';

export default function App() {
  const [kilos, setKilos] = useState();
  const [lbs, setLbs] = useState();
  const [check, setCheck] = useState(false);

  function convertWeight(val) {

    if (val == undefined) {
      setKilos('XXX');
      setLbs('XXX');

    } else {

        //0 = kg 1 = lbs
      if (check == false) {
        setKilos(val);
        setLbs((val / 0.453592).toFixed(0));
        
      } else {
        setKilos((val * 0.453592).toFixed(0));
        setLbs(val);

      }
    }
  }

  function handleSwitch(e) {
    console.log('hasdfas');
    setCheck(e.target.checked);
  }

  return (
    <View style={styles.container}>
      {/* <Switch onChange={handleSwitch()} /> */}

      <Text style={styles.text}>You weigh {kilos} kgs</Text>
      <Text style={styles.text}>You weigh {lbs} lbs</Text>
      <input onChange={(e) => convertWeight(e.target.value)} />

      <PlateButton />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },

  text: {
    color: 'white',
  },
});
