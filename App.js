import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Picker} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RNPickerSelect from 'react-native-picker-select';

const mapboxAccessToken =
  'pk.eyJ1IjoiYWd1czEyMzQ1IiwiYSI6ImNraWl0cWhrZDBhNDkydHFyOHQyYzBoOHQifQ.Rfnc3UgfOE7FGLQJW2tg-Q';
MapboxGL.setAccessToken(mapboxAccessToken);

const App = () => {
  const [cCor, setCor] = useState([98.66667,3.58333]);
  const [zoom, setZoom] = useState(4);
  const [selectedValue, setSelectedValue] = useState('Sumut');

  const Aceh = [95.323753,5.548290];
  const Sumut = [98.66667,3.58333];
  const Sumbar = [100.35427,-0.94924];
  const Sumsel = [104.7458,-2.91673];
  const Riau = [101.45,0.53333];
  const Lampung = [105.25803,-5.42544];
  const Bengkulu = [102.26554,-3.80044];

  const startDestinationPoints = [Aceh, Sumut, Sumbar, Sumsel, Riau, Lampung, 
    Bengkulu];

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
