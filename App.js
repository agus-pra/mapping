import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Picker} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RNPickerSelect from 'react-native-picker-select';

const mapboxAccessToken =
  'pk.eyJ1IjoiYWd1czEyMzQ1IiwiYSI6ImNraWl0cWhrZDBhNDkydHFyOHQyYzBoOHQifQ.Rfnc3UgfOE7FGLQJW2tg-Q';
MapboxGL.setAccessToken(mapboxAccessToken);

const App = () => {
  const [cCor, setCor] = useState([109.32199, -0.03109]);
  const [zoom, setZoom] = useState(4);
  const [selectedValue, setSelectedValue] = useState('sumatera utara');

  const Aceh = [95.323753,5.548290];
  const Sumut = [98.66667,3.58333];
  const Sumbar = [100.35427,-0.94924];
  const Sumsel = [104.7458,-2.91673];
  const Riau = [101.45,0.53333];
  const Lampung = [105.25803,-5.42544];
  const Bengkulu = [102.26554,-3.80044];
  const Kaltim = [116.82887,-1.26753];
  const Kalsel = [114.59075,-3.31987];
  const Kalbar = [109.32199,-0.03109];
  const Jambi = [103.61667,-1.6];
  const Jakarta = [106.84513,-6.21462];
  const DKI = [110.36083,-7.78278];
  const Jabar = [107.61861,-6.90389];
  const Jatim = [112.75083,-7.24917];
  const Jateng = [110.4203,-6.9932];
  const Banten = [106.71789,-6.28862];
  const Sulsel = [119.4221,-5.14];
  const Sulut = [124.84892,1.48218];
  const Sulteng = [119.8707,-0.8917];
  const Maluku = [128.18141,-3.69543];
  const Bali = [115.21667,-8.65];
  const NTT = [123.6075,-10.1718];
  const NTB = [116.11667,-8.58333];

  const startDestinationPoints = [Aceh, Sumut, Sumbar, Sumsel, Riau, Lampung, 
    Bengkulu, Kaltim, Kalsel, Kalbar, Jambi, Jakarta, DKI, Jabar, Jatim, Jateng,
    Banten, Sulsel, Sulut, Sulteng, Maluku, Bali, NTT, NTB];

  const testClick = (val) => {
    const data = val.split(',').map(x=>+x);
    setCor(data);
    setZoom(10);
  }

  const clearAll = () => {
    setCor([109.32199, -0.03109]);
    setZoom(4);
  } 

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={zoom} centerCoordinate={cCor} />
        {startDestinationPoints.map((point, index) => (
          <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: '#005fcc',
                borderRadius: 50,
                borderColor: '#fff',
                borderWidth: 3,
              }}
            />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
  actionStat: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(44, 62, 80,0.7)',
    bottom: 0,
  }
});

export default App;