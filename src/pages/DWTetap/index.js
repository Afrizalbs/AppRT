import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from '../../components';
import {Firebase} from '../../config';

const DWTetap = ({navigation}) => {
  const [dataWarga, setDataWarga] = useState([]);
  useEffect(() => {
    Firebase.database()
      .ref('warga/' + 'tetap/')
      .on('value', (res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDataWarga(data);
        }
      });
    // .then((res) => {
    //   if (res.val()) {
    //     const oldData = res.val();
    //     const data = [];
    //     Object.keys(oldData).map((key) => {
    //       data.push({
    //         id: key,
    //         data: oldData[key],
    //       });
    //     });
    //     setDataWarga(data);
    //   }
    // });
  }, []);
  return (
    <View style={styles.page}>
      {dataWarga.map((warga) => {
        return (
          <Card
            key={warga.id}
            nama={warga.data.fullName}
            alamat={warga.data.addressNow}
            onPress={() => navigation.navigate('Detail', warga)}
          />
        );
      })}
    </View>
  );
};

export default DWTetap;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
