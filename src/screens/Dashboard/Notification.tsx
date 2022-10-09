import React, { useState } from 'react';
import { Block, Button, Modal, Text, Input, Image } from '../../components/';
import { ImageBackground, Dimensions, View } from 'react-native';
import { useTheme, useData } from '../../hooks/';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = (props) => {
  const { assets, colors, gradients, sizes, icons, } = useTheme();


  // borderTopStartRadius: 45,
  //       borderTopEndRadius: 45,
  //       // bottom: 35,
  return (
    <Block safeScroll flex={1}  >
      <Block style={{ borderBottomStartRadius: 25, borderBottomEndRadius: 25, }} align="center" justify='center' backgroundColor={'#0059FF'} height={sizes.width * 0.80} >
          <Text h5 white>Your Portfolio Balance</Text>
          <Text h4 white>$520,782,7</Text>
          <Text h5 white>+2.5% Last 24 hours</Text>
      </Block>
      {/* //====================================================================================== */}
      <Block flex={1} style={{ top: -120 }} height={sizes.width * 0.50} >
          <Text h5 paddingLeft={15} color={'#FFFFFF'} >Tranding</Text> 
        <Block row margin={10} flex={1}   >
          <Block card flex={1}  margin={5} justify="center" align='center'>
            <Text>Hello</Text>
          </Block> 

          <Block card flex={1}  margin={5} justify="center" align='center'>
            <Text>Hello</Text>
          </Block>

          <Block card flex={1}  margin={5} justify="center" align='center'>
            <Text>Hello</Text>
          </Block>


        </Block>
      </Block>
      {/* //====================================================================================== */}
      <Block flex={1} style={{ top: -120 }}  >
          <Block card flex={1}  margin={5} justify="center" align='center'>
            <Text>Hello</Text>
          </Block>
      </Block>
    </Block >
  );

};
export default App;
