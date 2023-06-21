import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

import { useState } from 'react';
// import PlateButton from './components/Button/Buttons';
// import Switch from './components/Switch/Switch';

export default function App() {
  const [weight, setWeight] = useState();
  const [convertedWeight, setConvertedWeight] = useState();
  const [check, setCheck] = useState(false);

  function convertWeight() {
    //0 = kg 1 = lbs
    if (!check) {
      setWeight(weight);
      setConvertedWeight(weight / 0.453592);
    } else {
      setWeight(convertedWeight * 0.453592);
      setConvertedWeight(setConvertedWeight);
    }

    function handleSwitch(e) {
      console.log('hasdfas');
      setCheck(e.target.checked);
    }

    return (
      <View style={styles.container}>
        {/* <Switch onChange={handleSwitch()} /> */}

        <Text style={styles.text}>You weigh {weight} kgs</Text>
        <Text style={styles.text}>You weigh {convertedWeight} lbs</Text>
        <input onChange={(e) => convertWeight(e.target.value)} />

        <PlateButton />

        <StatusBar style="auto" />
      </View>
    );
  }
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
