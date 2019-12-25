import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
    <Text style = {styles.text} > Hi there! < /Text>
    <Button title="Go to Latitude Longitude Screen"
    onPress={() => props.navigation.navigate('LatLong') }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center'
  }
});

export default HomeScreen;
