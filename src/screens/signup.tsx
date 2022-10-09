import React, { useState } from 'react';
import { Block, Button, Modal, Text, Input, Image } from '../components/';
import { View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme, useData } from '../hooks/';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';




const App = (props) => {
    const navigation = props.navigation;
    const { onSignUp, translations } = useData();
    const { assets, colors, gradients, sizes } = useTheme();
    const [showModal, setModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // <Modal visible={showSuccessModal} onRequestClose={() => setSuccessModal(false)}>
    const [showSuccessModal, setSuccessModal] = useState(false);
    const [showFailModal, setFailModal] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [filePath, setFilePath] = useState('https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg');

    return (
        <Block safeScroll flex={1} scroll padding={20}>
            <Block shadow={true} flex={0}  >
                {/* <Text h3 marginBottom={'5%'}>{translations.signup.title}</Text> */}
                <Block justify="center" align="center" >
                    <TouchableOpacity onPress={() => {
                        ImagePicker.openPicker({
                            multiple: false
                        }).then(images => {
                            setFilePath(images.path);
                        });;
                    }}>
                        <Image
                            source={{ uri: filePath }}
                            style={{ width: 150, height: 150 }} />

                    </TouchableOpacity>
                </Block>
                <Text h5 bold marginLeft={4}>{translations.signup.firstNameLabel}</Text>
                <Input onChangeText={(value) => { setFirstName(value) }} placeholder={translations.signup.firstNameInput} marginBottom={sizes.sm} />
                <Text h5 bold marginLeft={4}>{translations.signup.lastNameLabel}</Text>
                <Input onChangeText={(value) => { setLastName(value) }} placeholder={translations.signup.lastNameInput} marginBottom={sizes.sm} />
                <Text h5 bold marginLeft={4}>{translations.signup.emailLabel}</Text>
                <Input onChangeText={(value) => { setEmail(value) }} vactoricon vactorIconSize={20} vactorIconName="email" vactorIconType="Entypo" vactorIconColor={colors.contrasting} placeholder={translations.signup.emailInput} marginBottom={sizes.sm} />
                <Text h5 bold marginLeft={4}>{translations.signup.passwordLabel}</Text>
                <Input onPress={() => { setPasswordVisibility(!passwordVisibility) }} password secureTextEntry={passwordVisibility} onChangeText={(value) => { setPassword(value) }} vactoricon vactorIconSize={22} vactorIconName="lock" vactorIconType="Entypo" vactorIconColor={colors.contrasting} placeholder={translations.signup.passwordInput} marginBottom={sizes.sm} />
                <Button onPress={() => setModal(true)}>
                    <Text p >{translations.signup.text1}<Text p bold italic>{translations.signup.text2}</Text> {translations.signup.text3} <Text p bold italic>{translations.signup.text4}</Text></Text>
                </Button>
                <Button
                    marginVertical={sizes.s}
                    marginHorizontal={sizes.sm}
                    onPress={async () => {
                        if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && filePath!=='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg') {
                            const responce = await onSignUp(email, password, (firstName + " " + lastName), filePath);
                            if (responce.status === 'success') {
                                // setSuccessModal(true);
                                navigation.push(translations.navigation.Login);
                            } else {
                                setErrorMessage(String(responce.message))
                                setFailModal(true);
                            }
                        }
                    }}
                    gradient={gradients.info}>
                    <Text bold white transform="uppercase">
                        {translations.signup.signUpLabel}
                    </Text>
                </Button>
            </Block>
            <Modal visible={showModal} onRequestClose={() => setModal(false)}>
                <ScrollView style={{ height: Dimensions.get('window').height / 2.3, }}>
                    <Text h5 marginBottom={'5%'}>Terms & Conditions</Text>
                    <Text p>Welcome to Nouman Social App!</Text>
                    <Text></Text>
                    <Text p>These terms and conditions outline the rules and regulations for the use of Nouman Social's Website, located at http://noumanhayat.com/.</Text>
                    <Text></Text>
                    <Text p>By accessing this website we assume you accept these terms and conditions. Do not continue to use noumanhayat.com if you do not agree to take all of the terms and conditions stated on this page.</Text>
                    <Text></Text>
                    <Text p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</Text>
                    <Text p bold>Cookies</Text>
                    <Text></Text>
                    <Text p>We employ the use of cookies. By accessing noumanhayat.com, you agreed to use cookies in agreement with the Nouman Social's Privacy Policy.</Text>
                    <Text></Text>
                    <Text p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</Text>
                    <Text></Text>
                    <Text p bold>License</Text>
                    <Text></Text>
                    <Text p>Unless otherwise stated, Nouman Social and/or its licensors own the intellectual property rights for all material on noumanhayat.com. All intellectual property rights are reserved. You may access this from noumanhayat.com for your own personal use subjected to restrictions set in these terms and conditions.</Text>
                </ScrollView>
            </Modal>

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
                        <Text h5 >Account Created Successfully</Text>
                    </Block>
                </ScrollView>
            </Modal>
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


            <Block justify={'center'} flex={0} marginTop={'3%'} marginHorizontal={sizes.sm} align={'center'}>
                <Button onPress={() => { navigation.push(translations.navigation.Login) }}>
                    <Text>Already have an account?<Text color={colors.primary}>{translations.signup.signInLabel}</Text></Text>
                </Button>
            </Block>

        </Block>

    );

};
export default App;
