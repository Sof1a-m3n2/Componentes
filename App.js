import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{

    height: 50,
    width: '100%',
    paddingHorizontal:10,
    flexDirection: 'row'

  },
  btn:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#5B89A6',
  },
  text:{
    fontSize:40,
    color: 100,
    paddingHorizontal:10,


    
  },

  count:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  }
});
