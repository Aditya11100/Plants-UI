/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {images} from '../src/constants/images';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import RangeSlider from '@jesster2k10/react-native-range-slider';

const Home = props => {
  const [active, setActive] = useState('Concept');
  const [activePlace, setActivePlace] = useState('OUTDOOR');
  const [activeWeather, setActiveWeather] = useState('SUNNY');
  const [picker, setPicker] = useState('xl');
  const refRBSheet = useRef();
  const titles = ['Concept', 'Popular', 'New'];
  const places = ['INDOOR', 'OUTDOOR', 'GARDEN'];
  const weatherImage = [
    {title: 'RAIN', images: images.drop},
    {title: 'SUNNY', images: images.sun},
    {title: 'HOT', images: images.temperature},
  ];
  const plants = [
    {title: 'Gasteria Kyoryu', image: images.plants1},
    {title: 'Astrophytum', image: images.plants2},
    {title: 'Gasteria Kyoryu', image: images.plants3},
  ];
  const size = ['s', 'm', 'l', 'xl'];

  return (
    <SafeAreaView style={{flex: 1}}>
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
        style={{marginTop: 33, paddingHorizontal: 12.5, flexDirection: 'row'}}>
        {plants.map(item => (
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => props.navigation.navigate('Detail')}>
            <Text style={styles.textCard}>{item.title}</Text>
            <View style={{alignItems: 'center'}}>
              <Image
                source={item.image}
                style={{height: 210, width: 200, marginTop: 30}}
              />
            </View>
            <View style={{flexDirection: 'row', marginLeft: 31, marginTop: 40}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  top: 5,
                  fontFamily: 'Lato',
                }}>
                {'$'}
              </Text>
              <Text
                style={{fontSize: 24, fontWeight: '800', fontFamily: 'Lato'}}>
                {'228.'}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  top: 6,
                  fontFamily: 'Lato',
                }}>
                {'00'}
              </Text>
            </View>
            <LinearGradient
              colors={['#1DA154', '#28CA6B']}
              style={styles.plusUI}>
              <Image source={images.plus} />
            </LinearGradient>
          </TouchableOpacity>
        ))}
        {/* <View style={styles.cardStyle}>
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
        </View> */}
      </ScrollView>
      <View style={{flexDirection: 'row', marginLeft: 36, marginTop: -20}}>
        <View style={styles.pagination1} />
        <View style={styles.pagination2} />
        <View style={styles.pagination3} />
        <View style={styles.pagination4} />
        <View style={styles.pagination5} />
      </View>
      <RBSheet
        ref={refRBSheet}
        height={520}
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
          <Text style={{fontWeight: '800', fontSize: 26, fontFamily: 'Lato'}}>
            {'FILTERS'}
          </Text>
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
                    ? {
                        fontSize: 9,
                        fontWeight: '900',
                        color: 'white',
                        fontFamily: 'Lato',
                      }
                    : {fontSize: 9, fontWeight: '900', fontFamily: 'Lato'}
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
          max={400}
          selectedMinimum={70} // ios only
          selectedMaximum={200} // ios only
          //   handleColor="#FFFFFF"
          tintColor="#20B25D"
          handlePressedColor="#f368e0"
          handleBorderColor="#20B25D"
          tintColorBetweenHandles="#20B25D"
          minLabelColor="#000000"
          maxLabelColor="#000000"
          handleDiameter={15}
          lineHeight={3}
          maxLabelFontSize={13}
          prefix="$"
          onChange={() => console.log('he')}
        />
        <View
          style={{
            marginTop: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            {weatherImage.map(item => (
              <View>
                <View
                  style={
                    activeWeather === item.title
                      ? styles.activeWeather
                      : styles.inActiveWeather
                  }>
                  <Image source={item.images} />
                </View>
                {activeWeather === item.title ? (
                  <Text
                    style={{
                      position: 'absolute',
                      fontSize: 9,
                      fontWeight: '800',
                      left: 3,
                      top: -15,
                    }}>
                    {item.title}
                  </Text>
                ) : null}
              </View>
            ))}
          </View>
          <View style={styles.picker}>
            <Text style={{fontWeight: '800', fontSize: 10}}>{'XL'}</Text>
            <Image source={images.up_point} style={{marginLeft: 9}} />
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
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
    fontFamily: 'Lato',
  },
  inActiveText: {
    fontWeight: '900',
    fontSize: 17,
    color: '#D2D2D2',
    fontFamily: 'Lato',
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
    fontFamily: 'Lato',
  },
  priceUi: {
    marginLeft: 31,
    marginTop: 40,
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Lato',
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
  activeWeather: {
    marginRight: 26,
    height: 39,
    width: 43,
    backgroundColor: '#20B25D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  inActiveWeather: {
    marginRight: 26,
    height: 39,
    width: 43,
    backgroundColor: '#F7F7F7',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  picker: {
    height: 37,
    width: 55,
    borderRadius: 8,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pagination1: {
    height: 4,
    width: 4,
    backgroundColor: '#EAE7E7',
    borderRadius: 4,
    marginRight: 13,
  },
  pagination2: {
    height: 4,
    width: 4,
    backgroundColor: '#C2C2C2',
    borderRadius: 4,
    marginRight: 13,
  },
  pagination3: {
    height: 4,
    width: 4,
    backgroundColor: '#20B25D',
    borderRadius: 4,
    marginRight: 13,
    borderColor: '#000000',
    borderWidth: 0.5,
  },
  pagination4: {
    height: 4,
    width: 4,
    backgroundColor: '#8D8D8D',
    borderRadius: 4,
    marginRight: 13,
  },
  pagination5: {
    height: 4,
    width: 4,
    backgroundColor: '#777777',
    borderRadius: 4,
    marginRight: 13,
  },
});
