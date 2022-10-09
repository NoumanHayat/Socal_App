// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
// import { useFonts } from 'expo-font';
// import React, { useState } from 'react';
// import { FlatList, View } from 'react-native';
// import { DataProvider } from './src/hooks';
// import { useTheme } from './src/hooks';
// import { Text, Block, Button, Checkbox, Image, Input, Switch, Modal } from './src/components/';
// import Icon from 'react-native-vector-icons/Entypo';
// // import AppNavigation from './src/navigation/App';
// const App = () => { 
//   const [showModal, setModal] = useState(false);
//   const [quantity, setQuantity] = useState('01');
//   const [switch1, setSwitch1] = useState(true);
//   const [switch2, setSwitch2] = useState(false);
//   const { assets, colors, gradients, sizes, icons } = useTheme();
//   return (
//     <DataProvider>
//       {/* <Block padding={15}>
//         <Text p color={colors.primary}>hello</Text>
//         <Button
//           gradient={gradients.info}
//           marginBottom={sizes.base}
//           onPress={() => {
//             alert(
//               ' <Button flex={1} gradient={gradients.info} marginBottom={sizes.base} > <Text white bold transform="uppercase"> title</Text></Button>',
//             );
//           }}>
//           <Text white bold transform="uppercase">
//             info
//           </Text>
//         </Button>

//         <Text color={colors.primary}>hello</Text>
//         <Checkbox
//           marginRight={sizes.sm}
//           checked={(checked) => { alert("ok") }}
//           onfPress={(value) => { alert(value) }}
//         />
//         <Image
//           source={assets.card1}
//           color={colors.checkboxIcon}
//         />
//         <Image
//           background
//           resizeMode="cover"
//           padding={sizes.sm}
//           paddingBottom={sizes.l}
//           radius={sizes.cardRadius}
//           source={assets.background}>


//         </Image>
//         <Icon name="user" size={15} color="black" />
//         <Button social="facebook" />
//         <Input
//           search
//           label="Search"
//           marginBottom={sizes.sm}
//           placeholder="Search with label"
//         />
//       </Block> */}
//       <Block row flex={0} align="center" justify="space-between">
//         <Text>Switch is {switch1 ? 'ON' : 'OFF'}</Text>
//         <Switch
//           checked={switch1}
//           onPress={(checked) => setSwitch1(checked)}
//         />
//       </Block>


//     </DataProvider>
//   );
// };

// export default App;

import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import { DataProvider } from './src/hooks';
import AppNavigation from './src/navigation/App';
import SplashScreen from 'react-native-splash-screen'
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <DataProvider>
      <AppNavigation />
    </DataProvider> 
  );
}
 