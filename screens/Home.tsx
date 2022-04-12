/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {images} from '../src/constants/images';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import RangeSlider from '@jesster2k10/react-native-range-slider';

const Home = () => {
  const [active, setActive] = useState('Concept');
  const [activePlace, setActivePlace] = useState('OUTDOOR');
  const refRBSheet = useRef();
  const titles = ['Concept', 'Popular', 'New'];
  const places = ['INDOOR', 'OUTDOOR', 'GARDEN'];

  return (
    <View style={{flex: 1}}>
      <View style={styles.iconStyle}>
        <Image source={images.menu} />
        <View style={{flexDirection: 'row'}}>
          <Image source={images.cart} style={{marginRight: 54}} />
          <Image source={images.search} />
        </View>
      </View>
      <View style={styles.filterTitle}>
        {titles.map(item => (
          <>
            <Text
              style={active === item ? styles.activeText : styles.inActiveText}>
              {item}
            </Text>
            {active === item ? <View style={styles.borderColor} /> : null}
          </>
        ))}
      </View>
      <TouchableOpacity
        style={styles.filterIcon}
        onPress={() => refRBSheet.current.open()}>
        <Image source={images.filter} />
      </TouchableOpacity>
      <ScrollView
        horizontal={true}
        style={{marginTop: 33, paddingHorizontal: 12.5}}>
        <View style={styles.cardStyle}>
          <Text style={styles.textCard}>{'Gasteria Kyoryu'}</Text>
          <View style={{alignItems: 'center'}}>
            <Image
              source={images.plants1}
              style={{height: 210, width: 200, marginTop: 30}}
            />
          </View>
          <Text style={styles.priceUi}>{'$228.00'}</Text>
          <LinearGradient colors={['#1DA154', '#28CA6B']} style={styles.plusUI}>
            <Image source={images.plus} />
          </LinearGradient>
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        height={492}
        closeOnDragDown={true}
        // closeOnPressMask={false}
        customStyles={{
          container: {
            borderRadius: 40,
            paddingHorizontal: 36,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '800', fontSize: 26}}>{'FILTERS'}</Text>
          <Image source={images.cross} />
        </View>
        <View
          style={{
            marginTop: 64,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {places.map(item => (
            <TouchableOpacity
              style={
                activePlace === item
                  ? styles.activePlace
                  : styles.inactivePlacesUi
              }>
              <Text
                style={
                  activePlace === item
                    ? {fontSize: 9, fontWeight: '900', color: 'white'}
                    : {fontSize: 9, fontWeight: '900'}
                }>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={{fontWeight: '800', fontSize: 15, marginTop: 68}}>
          {'Price Range'}
        </Text>
        <RangeSlider
          type="range" // ios only
          min={0}
          max={100}
          selectedMinimum={20} // ios only
          selectedMaximum={60} // ios only
          tintColor="#ecf0f1"
          handleColor="#f368e0"
          handlePressedColor="#f368e0"
          tintColorBetweenHandles="#ff9ff3"
          onChange={() => console.log('he')}
        />
      </RBSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 29,
    marginRight: 30,
  },
  filterTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 26,
    marginRight: 65,
    marginTop: 83,
  },
  activeText: {
    fontWeight: '800',
    fontSize: 17,
    // fontFamily: 'Lato',
  },
  inActiveText: {
    fontWeight: '900',
    fontSize: 17,
    color: '#D2D2D2',
  },
  borderColor: {
    height: 3,
    width: 19,
    backgroundColor: '#1DA154',
    borderRadius: 1,
    position: 'absolute',
    top: 25,
    left: 4,
  },
  filterIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 57,
    marginRight: 27,
  },
  cardStyle: {
    height: 408,
    width: 261,
    backgroundColor: '#F1F4FB',
    marginHorizontal: 12.5,
    borderRadius: 30,
    overflow: 'hidden',
  },
  textCard: {
    marginTop: 40,
    marginLeft: 31,
    fontSize: 21,
    fontWeight: '400',
    // fontFamily: 'Lato',
  },
  priceUi: {
    marginLeft: 31,
    marginTop: 40,
    fontWeight: '700',
    fontSize: 20,
  },
  plusUI: {
    paddingLeft: 26,
    paddingTop: 28,
    paddingRight: 42,
    paddingBottom: 45,
    position: 'absolute',
    bottom: -15,
    right: -15,
    borderRadius: 20,
  },
  inactivePlacesUi: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: '#F0F0F0',
    borderColor: '#D3D3D3',
    borderWidth: 0.5,
    borderRadius: 16,
  },
  activePlace: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: '#20B25D',
    borderRadius: 16,
  },
});
