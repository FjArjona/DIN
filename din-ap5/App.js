import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Button, TextInput, } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const imgPerfil = () => {
  return (
    <View>
      <Image
        style={styles.perfil}
        source={{
          uri: 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
        }}
      />
    </View>

  );
}

const renderImages = () => {
  return images.map((item, index) => (
    <Image key={index} style={styles.galleryImage} source={{ uri: item }} />
  ));
};

const renderImageGrid = () => (
  <View style={styles.photoGrid}>
    {renderImages()}
  </View>
);


//const localImg = require('./images/visualstudio_code-card.png');
export default class App extends Component {
  render() {
    return (
      <View style={styles.contenedor}>
        <View style={styles.seccion0} />
        <View style={styles.seccion1}>
          <View style={styles.seccion1_1}>
          {imgPerfil()}
          </View>
          <View style={styles.seccion1_2}>
            <View style={styles.seccion1_2_1}> 
              <View style={styles.seccion1_2_1_1}>
                <Text style={styles.titleHeader}>Posts </Text>
                <Text style={styles.textHeader}>20</Text>
              </View>
              <View style={styles.seccion1_2_1_1}>
                <Text style={styles.titleHeader}>Followers </Text>
                <Text style={styles.textHeader}>110304</Text>
              </View>
              <View style={styles.seccion1_2_1_1}>
                <Text style={styles.titleHeader}>Following </Text>
                <Text style={styles.textHeader}>1103</Text>
              </View>
            </View>
            <View style={styles.seccion1_2_2}>
              <Button style={styles.button}
                mode="text"
                color="black">
                 Edit Profile 
              </Button>
            </View>
          </View>
        </View>

        <View style={styles.seccion2}>
          {renderImageGrid()}
        </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    flexDirection: 'column',
  },
  seccion0:{
    flex:0.7,
  },
  seccion1: {
    flex:1,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 6,
    textAlign: 'right',
    flexDirection: 'row',
  },
  seccion1_1:{
    flex:1,
  },
  seccion1_2:{
    flex:2,
    flexDirection: 'column',
    textAlign:'center'
  },
  seccion1_2_1:{
    flex:1,
    flexDirection: 'row',
  },
  seccion1_2_1_1:{
    flex:1,
  },
  seccion1_2_2:{
    flex:1,
  },
  seccion2: {
    flex:5,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    textAlign: 'center',
  },
  perfil: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  button:{
    backgroundColor: '#dddddd',
    
  },
  titleHeader:{
    fontSize:'11px',
    textAlign:'left',
    fontWeight:'700'
  },
  textHeader:{
    textAlign:'left',
    fontSize:'12px',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',  // Cambiado de 'space-around' a 'space-between'
    padding: 8,
  },
  galleryImage: {
    width: (screenWidth  ) / 5,  // Ajuste del ancho para 4 columnas
    height: 70,
    marginVertical: 4,
  },
});