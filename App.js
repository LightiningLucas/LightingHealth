import react from 'react';
import { StyleSheet,View } from 'react-native';
import Title from './src/Components/Title/Title';
import Main from './src/Components/Main/Main';


export default function App() {
  return (
    <View style={styles.container}>
        <Title/>
        <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 110,
  },
});
