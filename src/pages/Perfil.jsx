import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Context } from '../context/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment/moment';



export default function Perfil() {
  const [user, setUser] = useState(null)
  const { signOut } = useContext(Context)

  useEffect(() => {

    async function getStorage() {
      const getUser = await AsyncStorage.getItem('user')
      setUser(JSON.parse(getUser))
    }
    getStorage()
  }, [])

  console.log(user)

  return (
    <SafeAreaView style={styles.containerLogin}>
      <View style={styles.containerInput}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={signOut}>
          <MaterialIcons name="exit-to-app" size={24} color="black" />
        </TouchableOpacity>
      </View>
    <View style={styles.circle}>

    </View>
      <View style={styles.containerData}>
        <Text style={styles.data}> {user?.nome}</Text>
        <Text style={styles.data}> {user?.email}</Text>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.subtitleInfo}>Meus Dados</Text>
        <Text style={styles.subtitleData}>Data de nascimento:<Text style={styles.infoData}> {moment(user?.dataNascimento).format("DD/MM/YYYY") }</Text></Text>
        <Text style={styles.subtitleData}>Restrição Alimentar:<Text style={styles.infoData}> {user?.restricaoAlimentar}</Text></Text>
        <Text style={styles.subtitleData}>Categoria do Plano:<Text style={styles.infoData}> {user?.categoriaPlano}</Text></Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerLogin: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F2FFE2',
      gap: 30
    },
    containerInput: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    circle: {
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: '#FFF',
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#000'
    },
    containerData: {
      width: '100%',
      height: 50,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    subtitleData: {
      fontSize: 18,
      fontWeight: '600',
    },
    data: {
      fontSize: 20,
      fontWeight: '400',
      alignSelf: 'center'
    },
    containerInfo: {
      width: '100%',
      height: 50,
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 20
    },
    subtitleInfo:{
      fontSize: 28,
      fontWeight: '600',
    },
    infoData: {
      fontSize: 18,
      fontWeight: '400',
    }
  });
  