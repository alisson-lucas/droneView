import React, {Component, useState, useEffect} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

import Drone from '../../assets/icons/drone.png'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
       dataSource: [0],
       latitude: -13.6596529,
       longitude: -69.6865912,
       error: null
     }
  }

  renderItem = ({ item }) => {
    return(
    <View style={styles.infos}>
      <View style={styles.textoContainer}>
        <View style={styles.locaisContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(`Video`)}>
            <Text style={styles.textos}>{item.location} - {item.dataTime}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }

  componentDidMount() {
    const url = 'http://healthdrones.tech/viewDroneMonitoring/'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.content
        })
    })
    .catch((error) => {
      console.log(error)
    })

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message}),
      { enableHighAccuracy: true, timeout: 2000, maximunAge: 2000 }
    );
  }

  render(){

    return (
      <View style={styles.container}>
        <MapView region={{latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: 0.04, longitudeDelta: 0.04}} style={styles.map}>
          <Marker coordinate={this.state}/>
            <Marker coordinate={{latitude: -8.094833 , longitude: -34.972750}}>
                <Image style={styles.icone} source={Drone} />
  
                <Callout onPress={() => this.props.navigation.navigate(`Video`)}>
                    <View style={styles.callout}>
                        <Text style={styles.name}>Voo de Monitoramento de Temperatura</Text>
                        <Text style={styles.local}>Jaboatão dos Guararapes</Text>
                        <Text styles={styles.piloto}>PcMarques</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
        <View style={styles.infos}>
          <FlatList data={this.state.dataSource} renderItem={this.renderItem} keyExtractor={(item, index) => index}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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

    icone: {
        width: 54,
        height: 54,
    },

    callout: {
        width: 260
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16
    },

    local: {
        color: '#666',
        marginTop: 5
    },

    piloto: {
        marginTop: 5
    }
})