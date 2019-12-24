import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
    <Text style = {styles.text} > Hi there! < /Text>
    <Button title="Go to Permission Screen"
    onPress={() => props.navigation.navigate('Perm') }
    />
    <Button title="Go to Location Screen"
    onPress={() => props.navigation.navigate('Location') }
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
