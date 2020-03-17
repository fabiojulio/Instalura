
import React, {Fragment} from 'react';
import {
  Image,
} from 'react-native';

import estilo from './estilo.js';

const Foto = () => {
  return (
    <Image 
        source={require('../../../res/img/alura.png')}
        style={estilo.imagem}
    />
  );
};

export default Foto;
