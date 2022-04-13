/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {images} from '../src/constants/images';

const Details = props => {
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 34,
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={images.left_arrow} style={{width: 24}} />
        </TouchableOpacity>
        <View style={styles.heartIcon}>
          <Image source={images.heart} />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={images.plants2}
          style={{height: 260, width: 280}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.lowerBody}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: '800', fontFamily: 'Lato'}}>
              {'Astrohytum'}
            </Text>
            <View style={{flexDirection: 'row'}}>
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
                {'312.'}
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
          </View>
          <View style={styles.count}>
            <Image source={images.minus} />
            <Text style={{fontSize: 18, fontWeight: '800', fontFamily: 'Lato'}}>
              {'1'}
            </Text>
            <Image source={images.plus_small} style={{tintColor: '#000000'}} />
          </View>
          <Text
            style={{
              marginTop: 35,
              fontSize: 10,
              fontWeight: '800',
              fontFamily: 'Lato',
            }}>
            {'SELECT POT'}
          </Text>
          <View style={styles.backgroundImage}>
            <ImageBackground
              source={images.pot}
              style={{
                height: 70,
                width: 70,
                borderRadius: 10,
                backgroundColor: 'pink',
                marginRight: 20,
              }}>
              <Image
                source={images.check}
                style={{position: 'absolute', bottom: 5, right: 5}}
              />
            </ImageBackground>
            <ImageBackground
              source={images.pot}
              style={{
                height: 70,
                width: 70,
                borderRadius: 10,
                backgroundColor: 'pink',
                marginRight: 20,
              }}
            />
            <ImageBackground
              source={images.pot}
              style={{
                height: 70,
                width: 70,
                borderRadius: 10,
                backgroundColor: 'pink',
                marginRight: 20,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '800',
              marginTop: 25,
              fontFamily: 'Lato',
            }}>
            {'DESCRIPTION'}
          </Text>
          <Text
            style={{
              width: 310,
              color: '#A9A9A9',
              marginTop: 8,
              lineHeight: 19,
              fontWeight: '500',
              fontSize: 13,
              fontFamily: 'Lato',
            }}>
            {
              'The species of the genus Astrophytum usually grow individually with spherical to columnar green shoots and reach heights of up to 1.5 meters'
            }
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Image
            source={images.cartSmall}
            style={{
              tintColor: '#FFFFFF',
              position: 'absolute',
              left: 80,
            }}
          />
          <Text style={{color: '#FFFFFF', fontSize: 11, fontWeight: '800'}}>
            {'ADD TO CART'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F1F4FB',
    flex: 1,
  },
  heartIcon: {
    height: 46,
    width: 46,
    backgroundColor: '#FEFEFE',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerBody: {
    backgroundColor: '#FEFEFE',
    flex: 1,
    borderRadius: 40,
    paddingHorizontal: 34,
    paddingTop: 46,
    justifyContent: 'space-between',
  },
  count: {
    width: 82,
    height: 25,
    borderWidth: 0.3,
    borderColor: '#D3D3D3',
    marginTop: 40,
    borderRadius: 4,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000000',
    width: '100%',
    height: 54,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
