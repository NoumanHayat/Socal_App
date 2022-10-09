// import * as React from 'react';
// import { Text, View } from 'react-native';

// export default function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Me!</Text>
//     </View>
//   );
// }

import * as React from 'react';
import { Block, Text, Switch, Button, Input, Modal, Image } from '../../components/';
import { useData, useTheme } from '../../hooks/';
import { ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableWithoutFeedback } from 'react-native';



export default function Home(props) {
  const navigation = props.navigation;
  const [showModal, setModal] = React.useState(false);
  const [english, setEnglish] = React.useState(true);
  const [showSuccessModal, setSuccessModal] = React.useState(false);
  const { colors, gradients, sizes, assets } = useTheme();
  const [language, setLanguage] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const { translations, isDark, handleIsDark, changeLanguage } = useData();
  return (
    <Block safeScroll padding={sizes.padding}>
      <Input search placeholder="Search" marginBottom={1} marginTop={sizes.sm} />
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Block flex={0} row justify="space-between" >
          <Text color={colors.contrasting}>{translations.darkMode}</Text>
          <Switch
            checked={isDark}
            onPress={(checked) => {
              handleIsDark(checked);
              setMessage(translations.settings.Change_Mode);
              setSuccessModal(true);
            }}
          />
        </Block>
      </Block>
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Block flex={0} row justify="space-between" >
          <Text color={colors.contrasting}>{translations.common.language}</Text>
          <Switch
            checked={language}
            onPress={(checked) => {
              setLanguage(checked);
              changeLanguage();
              setMessage(translations.settings.Change_Language);
              setSuccessModal(true);
            }}
          />
        </Block>
      </Block>
      {/* ========================================================================== */}
      <TouchableWithoutFeedback onPress={() => {navigation.push(translations.navigation.Login)}}>
        <Block card padding={sizes.sm} marginTop={sizes.sm} >
          <Block flex={0} row justify="space-between" >
            <Text color={colors.contrasting}>{translations.settings.Logout}</Text>
            <Entypo name="arrow-bold-right" size={24} color={colors.contrasting} />
          </Block> 
        </Block>
      </TouchableWithoutFeedback>

      <Modal visible={showSuccessModal} onRequestClose={() => setSuccessModal(false)}>
        <ScrollView >
          <Block flex={1} justify="center" align="center" >
            <Image
              // height={170}
              height={170}
              width={170}
              resizeMode="cover"
              source={assets.success}
            />
          </Block>
          <Block justify="center" align="center" marginBottom={'5%'} marginTop={'5%'} flex={1}>
            <Text h5 >{message}</Text>
          </Block>
        </ScrollView>
      </Modal>
    </Block>
  );
}
