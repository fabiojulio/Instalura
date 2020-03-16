
import React, {Fragment} from 'react';
import {
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Image,
} from 'react-native';

const informacoes = [
  {
    id: 1,
    usuario: 'Fabio'
  },
  {
    id: 2,
    usuario: 'João'
  },
  {
    id: 3,
    usuario: 'José'
  },
]

const App = () => {
  console.log(informacoes);
  return (
      <FlatList
        data={informacoes}
        renderItem={({item}) =>
          <Fragment>
            <Text>{item.usuario}</Text>
            <Image 
              source={require('./res/img/alura.png')}
              style={estilo.imagem}
            />
          </Fragment>  
        }
        keyExtractor={item => item.id.toString()}
      />
  );
};

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura
  }
})

export default App;
