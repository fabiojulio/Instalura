
import React, {Fragment} from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

import estilo from './estilo';

const Cabecalho = ({item}) => {
  return (
    <View style={estilo.cabecalho}>
      <Image
        source={require('../../../res/img/alura.png')}
        style={estilo.fotoUsuario}
      
      />
      <Text>{item.usuario}</Text>
    </View>
  );
};

export default Cabecalho;
