import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Modal} from 'react-native';

import Detalhes from './index/index';

export default function aula27() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    alert('TESTE');
  }

  function sairModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button tittle="Acessar" onPress={ abrirModal }/>

      <Modal animationType="slide" visible={modalVisible}>
        <Detalhes fechar={ sairModal }/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  }
});