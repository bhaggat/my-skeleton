import React, {useEffect, useState} from 'react';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import * as _ from 'lodash';

export default function HomeScreen(props) {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
