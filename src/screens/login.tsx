import React, { useState } from 'react';
import { Block, Button, Modal, Text, Input, Image } from '../components/';
import { ScrollView } from 'react-native';
import { useTheme, useData } from '../hooks/';


const App = (props) => {
  const { assets, colors, gradients, sizes } = useTheme();
  const { translations, onSignIn } = useData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFailModal, setFailModal] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('Default Error Message');
  const navigation = props.navigation;
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  return (
    <Block safeScroll flex={1} scroll padding={20}>
      <Block shadow={true} flex={0} marginTop={'15%'} >
        <Text h3 marginBottom={'20%'}>{translations.login.title}</Text>

        <Text h5 bold marginLeft={4}>{translations.login.emailTitle}</Text>
        {/* <Input vactoricon vactorIconName="glass" vactorIconType="FontAwesome" vactorIconColor="red" placeholder="Vactor Icon" marginBottom={sizes.sm} /> */}

        <Input vactoricon vactorIconSize={20} onChangeText={(value) => { setEmail(value) }}  vactorIconName="email" vactorIconType="Entypo"  placeholder={translations.login.emailInput} marginBottom={sizes.sm} />
        <Text h5 bold marginLeft={4}>{translations.login.passwordTitle}</Text>
        <Input onPress={() => { setPasswordVisibility(!passwordVisibility) }} password secureTextEntry={passwordVisibility} onChangeText={(value) => { setPassword(value) }} vactoricon vactorIconSize={22} vactorIconName="lock" vactorIconType="Entypo" vactorIconColor={colors.contrasting} placeholder={translations.signup.passwordInput} marginBottom={sizes.sm} />
        <Button 
          marginVertical={sizes.s}
          marginHorizontal={sizes.sm}
          onPress={() => { 
            if(email !== '' || password !== '') { 
            onSignIn(email, password) 
              .then(() => {  
                navigation.navigate(translations.navigation.Dashboard);
              }).catch(error => {
                setFailModal(true); 
                setErrorMessage(error.message);
              }
              );
          }else{
            setFailModal(true); 
            setErrorMessage('Please fill all fields');
          }
        }}
          gradient={gradients.info}>
          <Text bold white transform="uppercase">
            {translations.login.signInLabel}
          </Text>
        </Button>
      </Block>
      <Block justify={'center'} marginTop={'5%'} flex={0} marginHorizontal={sizes.sm} align={'center'}>
        <Text>{translations.login.text1}</Text>
      </Block>
      <Block row flex={0} marginTop={'6%'} justify="space-evenly">
        <Button social="facebook" />
        <Button social="twitter" />
        <Button social="dribbble" />
      </Block>
      <Block justify={'center'} flex={0} marginTop={'23%'} marginHorizontal={sizes.sm} align={'center'}>
        <Button onPress={() => { navigation.push(translations.navigation.SignUp) }}>
          <Text>Don't have a account?<Text color={colors.primary}> {translations.login.signUpLabel}</Text></Text>
        </Button>
      </Block>

      <Modal visible={showFailModal} onRequestClose={() => setFailModal(false)}>
        <ScrollView >
          <Block flex={1} justify="center" align="center" >
            <Image
              // height={170}
              height={170}
              width={170}
              resizeMode="cover"
              source={assets.fail}
            />
          </Block>
          <Block justify="center" align="center" marginBottom={'5%'} marginTop={'5%'} flex={1}>
            <Text h5 >{ErrorMessage}</Text>
          </Block>
        </ScrollView>
      </Modal>
 

    </Block>
  );

};
export default App;
