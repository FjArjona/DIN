import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity} from 'react-native';

export class CalculateIMG extends Component {


    constructor(props) {
    super(props);
    this.state = {
      IMG: '',
      height: '80',
      weight: '180',
      Clasification:'',
      Estilos:'',
      
    }
  }
  


    resultIMG = () => {
    const { weight, height } = this.state;
    const newIMG = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    this.setState({ IMG: newIMG.toFixed(2) }, () => {
      this.totalIMG();
    });
  };

totalIMG = () => {
    const valueIMG = this.state.IMG;

    

    if (valueIMG < 18.5) {
      this.setState({ Clasification: 'Peso insuficiente' });
      this.setState({ Estilo: estilos.textoVerde });
      //colorEstilo = estilos.textoVerde;      
    } else if (valueIMG >= 18.5 && valueIMG < 25) {
      this.setState({ Clasification: 'Normopeso' });
      this.setState({ Estilo: estilos.textoVerde });
    } else if (valueIMG >= 25 && valueIMG < 27) {
      this.setState({ Clasification: 'Sobrepeso grado I' });
      this.setState({ Estilo: estilos.textoVerde });
    } else if (valueIMG >= 27 && valueIMG < 30) {
      this.setState({ Clasification: 'Sobrepeso grado II (preobesidad)' });
      this.setState({ Estilo: estilos.textoNaranja });
    } else if (valueIMG >= 30 && valueIMG < 35) {
      this.setState({ Clasification: 'Obesidad tipo I' });
      this.setState({ Estilo: estilos.textoNaranja });
    } else if (valueIMG >= 35 && valueIMG < 40) {
      this.setState({ Clasification: 'Obesidad tipo II' });
      this.setState({ Estilo: estilos.textoNaranja });
    } else if (valueIMG >= 40 && valueIMG < 50) {
      this.setState({ Clasification: 'Obesidad tipo III (mórbida)' });
      this.setState({ Estilo: estilos.textoRojo });
    } else if (valueIMG >= 50) {
      this.setState({ Clasification: 'Obesidad de tipo IV (extrema)' });
      this.setState({ Estilo: estilos.textoRojo });
    }
  };

  

  render() {
    
    return (
      <View style={estilos.body}>
        <Text style={estilos.bodyTitulo}>Datos</Text>
        <Text style={estilos.bodyDatos}>Peso</Text>
        <TextInput
          style={estilos.bodyDatoPeso}
          placeholder=""
          placeholderTextColor="black"
          keyboardType="numeric"
          maxLength={8}
          onChangeText={(text) => this.setState({ weight: text })}
        />
        
          
        <Text style={estilos.bodyDatos}>Altura (en metros)</Text>
      
          <TextInput
          style={estilos.bodyDatoAltura}
          placeholder=""
          placeholderTextColor="black"
          keyboardType="numeric"
          maxLength={8}
          onChangeText={(text) => this.setState({ height: text })}
        />
        <TouchableOpacity style={estilos.calculateIMG} onPress={this.resultIMG }>
          <Text style={estilos.calculateIMGText}>Calcular IMG</Text>
        </TouchableOpacity>
        <Text>Resultado</Text>
        <Text style={this.state.Estilo}>{this.state.Clasification}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom:50,
  },
  bodyTitulo: {
    color: 'red',
    fontSize: 32,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  bodyDatos: {
    color: 'blue',
    fontSize: 24,
  },
  bodyDatoPeso: {
    fontSize: 24,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  bodyDatoAltura: {
    fontSize: 24,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  calculateIMG: {
    margin: 0,
    padding: 5,
    borderColor: '#60a9e3',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateIMGText: {
    fontSize: 18,
    color: '#60a9e3',
  },  
  textoVerde:{
    color:'green',
    fontWeight:700,
  },
  textoNaranja:{
    color:'orange',
    fontWeight:700,

  },
  textoRojo:{
    color:'red',
    fontWeight:700,

  }


});
