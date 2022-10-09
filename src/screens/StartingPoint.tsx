import React, { useState,useEffect } from 'react';
import { Block, Button, Modal, Text, Input, Image } from '../components/';
import { ImageBackground, Dimensions, View } from 'react-native';
import { useTheme,useData } from '../hooks/';
import auth from '@react-native-firebase/auth';

const App = (props) => { 
  const { translations , currentUser} = useData();
  const navigation = props.navigation;
  const { assets, colors, gradients, sizes } = useTheme();
  return ( 
    <Block flex={1} backgroundColor={'#F9F6F3'} >
      <ImageBackground
        source={require('../../assets/backgroundStart.jpg')}
        imageStyle={{flex: 1,}}
        style={{
          resizeMode: 'cover',
          alignSelf: 'stretch',
          width: '100%',
          height: '100%',
        }} >
        <Block flex={1}>
        </Block>
        <Block flex={0} margin={sizes.sm}  >
          <Button
            gradient={gradients.custom1}
            marginBottom={sizes.base}
            onPress={() => {
              navigation.push(translations.navigation.Login);
            }}>
            <Text white bold transform="uppercase">
              Login
            </Text>
          </Button>
          <Button
            gradient={gradients.info} 
            marginBottom={sizes.base}
            onPress={() => {
              navigation.push(translations.navigation.SignUp);
            }}>
            <Text white bold transform="uppercase">
              Sign Up
            </Text>
          </Button>
        </Block>
      </ImageBackground>
    </Block >
  );
 
};
export default App;

//===================================================================================================================================
// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
// import React, { useState } from 'react';
// // Import required components
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// // Import Image Picker
// import ImagePicker from 'react-native-image-crop-picker';
// const App = () => {
//   const [filePath, setFilePath] = useState('https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg');



//   return (
//     <SafeAreaView style={{ flex: 1, marginTop: 60 }}>

//       <View style={styles.container}>
//         <Image 
//           source={{ uri:filePath  }} 
//           style={{width: 100, height: 100}} />
        
//         <Text style={styles.textStyle}>
//           hello
//         </Text>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
          // onPress={() => {
          //   ImagePicker.openPicker({
          //     multiple: true
          //   }).then(images => {
          //     setFilePath(images[0].path);
          //     console.log(images[0].path);
          //   });;
          // }}
//         >
//           <Text style={styles.textStyle}>
//             Choose Image
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     padding: 10,
//     color: 'black',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#DDDDDD',
//     padding: 5,
//   },
//   imageStyle: {
//     width: 200,
//     height: 200,
//     margin: 5,
//   },
// });
