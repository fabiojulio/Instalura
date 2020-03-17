
import React, {Fragment} from 'react';
import {
  ScrollView,
  FlatList,
} from 'react-native';

import {Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';

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
    <ScrollView>
      <FlatList
        data={informacoes}
        renderItem={({item}) =>
          <Fragment>
            <Cabecalho item={item}/>
            <Foto/>
          </Fragment>  
        }
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

export default App;
