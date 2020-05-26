import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'

export default function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
           const { granted } = await requestPermissionsAsync();

           if (granted) {
               const {coords} = await getCurrentPositionAsync({
                   enableHighAccuracy: true
            })

            const { latitude, longitude } = coords;

            setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
            })
           }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

  return (
    <View style={styles.container}>
      <MapView initialRegion={currentRegion} style={styles.map}>
          <Marker coordinate={{latitude: -8.0521253 , longitude: -34.8969381}}>
              {/* <Image style={styles.avatar} source={petShop2} /> */}

              {/* <Callout>
                  <View style={styles.callout}>
                      <Text style={styles.name}>petShop2</Text>
                      <Text style={styles.bio}>Servicos de pet shop</Text>
                      <Text styles={styles.services}>Banho, Tosa, Hotelzinho</Text>
                  </View>
              </Callout> */}
          </Marker>
      </MapView>
      <View style={styles.infos}>
        <ScrollView>
          <View style={styles.textoContainer}>
            <View style={styles.locaisContainer}>
              <TouchableOpacity>
                <Text style={styles.textos}>Local 1 - 19/05/2020</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.locaisContainer}>
              <TouchableOpacity>
                <Text style={styles.textos}>Local 2 - 19/05/2020</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.locaisContainer}>
              <TouchableOpacity>
                <Text style={styles.textos}>Local 3 - 19/05/2020</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    },
    map: {
        flex: 1,
        
    },

    infos: {
      backgroundColor: '#fff',
      width: '100%',
      height: 230,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25

    },

    textoContainer:{
      marginLeft: 30,
      marginTop: 30
    },

    locaisContainer: {
      margin: 5
    },

    textos: {
      fontSize: 18
    },

    avatar: {
        
        width: 54,
        height: 54,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#fff'
    },

    callout: {
        width: 260
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16
    },

    bio: {
        color: '#666',
        marginTop: 5
    },

    services: {
        marginTop: 5
    }
})