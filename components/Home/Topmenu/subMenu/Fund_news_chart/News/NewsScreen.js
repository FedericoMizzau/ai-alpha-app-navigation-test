import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const NewsScreen = ({route, navigation}) => {
  if (route.params !== undefined) {
    const {description, title, image} = route.params;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.dataRow}>
          <Text style={styles.newsText}>{description}</Text>
          {/* <View style={styles.imageContainer}> */}
          <Image
            style={styles.image}
            source={{uri: image}}
            resizeMode="contain"
          />
          {/* </View> */}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.dataRow}>
          <Text style={styles.newsText}>News Main Screen</Text>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 10,
  },
  dataRow: {
    padding: 10,
    flexDirection: 'row',
  },
  newsText: {
    width: '60%',
    marginHorizontal: 10,
    padding: 10,
    fontSize: 12,
    color: '#242427',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewsScreen;
