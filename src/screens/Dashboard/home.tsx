import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTheme, useData } from '../../hooks/';
import { Block, Button, Input, Image, Switch, Modal, Text } from '../../components/';
import { TouchableWithoutFeedback } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
// buttons example 
const Card = (props) => {
  const { colors, gradients, icons, sizes,assets } = useTheme();
  const [showPictureModal, setPictureModal] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => { setPictureModal(true) }}>
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Image
          height={170}
          resizeMode="cover"
          source={{
            uri: props.url,
          }}
        />
        <Text
          p
          marginTop={sizes.s}
          marginLeft={sizes.xs}
          marginBottom={sizes.sm}>
          {props.description}
        </Text>

        {/* user details */}

        <Block row marginLeft={sizes.xs} marginBottom={sizes.xs}>
          <Image
            radius={sizes.s}
            width={sizes.xl}
            height={sizes.xl}
            source={{
              uri: props.profile,
            }}
            style={{ backgroundColor: colors.white }}
          />
          <Block justify="center" marginLeft={sizes.s}>
            <Text p semibold>
              {props.user_name}
            </Text>
            <Text p gray>
              Posted on {props.date}
            </Text>
          </Block>
        </Block>
        <Modal visible={showPictureModal} onRequestClose={() => setPictureModal(false)}>
          <ScrollView >
            <Block flex={1} justify="center" align="center" >
              <Image
                // height={170}
                height={400}
                width={'100%'}
                resizeMode="cover"
                source={{uri: props.url}}
              />
            </Block>
            {/* <Block justify="center" align="center" marginBottom={'5%'} marginTop={'5%'} flex={1}>
              <Text h5 >{message}</Text>
            </Block> */}
          </ScrollView>
        </Modal>
        {/* location & rating */}
      </Block>
    </TouchableWithoutFeedback>
  );
}; 
const AddPost = ({ props }) => {
  const navigation = props.navigation;
  const [showAudience, setShowAudience] = useState(false);
  const { colors, gradients, icons, sizes, assets } = useTheme();
  const { translations, currentUser, addPost } = useData();
  const [test, setTest] = useState(false);
  const [audience, setAudience] = useState('Public');
  const [showSuccessModal, setSuccessModal] = React.useState(false);
  const [filePath, setFilePath] = useState('https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg');
  const [message, setMessage] = useState('')
  console.log(currentUser)
  return (
    <TouchableWithoutFeedback >
      <Block card flex={1} hight={'100%'} weight={'100%'} padding={sizes.sm} marginTop={sizes.sm}>
        <Block row>
          <Image
            width={sizes.width * 0.13}
            height={sizes.width * 0.13}
            resizeMode="cover"
            padding={sizes.sm}
            paddingTop={0}
            radius={360}
            source={{ uri: currentUser.photoURL }}
          />
          <Block marginLeft={sizes.sm}>
            <Input multiline
              placeholder="What's going on?" onChangeText={(value) => { setMessage(value) }} marginBottom={sizes.sm} />
          </Block>
        </Block>
        <Block flexDirection="row" style={{ alignSelf: 'flex-end' }}>
          <Button gradient={gradients.secondary} margin={3} padding={5} onPress={() => { setShowAudience(true) }}>
            <Entypo name="dots-three-horizontal" size={18} color="#FFFFFF" />
          </Button>
          <Button gradient={gradients.primary} margin={3} padding={5} onPress={() => {
            ImagePicker.openPicker({
              multiple: false
            }).then(images => {
              setFilePath(images.path);
            }).catch(error => {
              alert(error);
            });;
          }}>
            <Text p color={colors.matching}><Entypo name="camera" size={18} color="#FFFFFF" />  Camera</Text>
          </Button>
          <Button gradient={gradients.info} margin={3} padding={5} onPress={() => {
            if (message.length > 0 && filePath !== 'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg') {
              addPost(message, audience, filePath).then((messages) => {
                setMessage('Post added successfully');
                setSuccessModal(true);
                navigation.push(translations.navigation.Dashboard);
              }).catch(error => {
                alert(error);
              })

              // if (responce.status === 'success') {
              //   setSuccessModal(true);
              //   navigation.push(translations.navigation.Dashboard);
              // } else {
              // setErrorMessage(String(responce.message))
              // setFailModal(true);
              //}
            } else {
              alert('Please fill all the fields')
            }
          }}>
            <Text p color={colors.matching}><AntDesign name="addfolder" size={18} color="#FFFFFF" />  Add Post</Text>
          </Button>
          {/* <Button gradient={gradients.secondary} margin={3} padding={5} onPress={() => alert("Under Process")}>
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </Button> */}
        </Block>
        <Modal visible={showAudience} onRequestClose={() => setShowAudience(false)}>
          <ScrollView >
            <Block flex={1} justify="center" align="center" >
              <Text h3 bold>Default Audience</Text>
            </Block>
            <Block justify="center" align="center" marginBottom={'5%'} marginTop={'5%'} flex={1}>
              <Text  >We care about your privacy and want to give you more ways to control who you share with in your community. Now you can set a default audience.</Text>
              <Text></Text>
              <Text>This will be your audience for future posts, but you can always change it for a specific post. The audience you chose most recently was <Text bold>Public</Text>.</Text>
              <TouchableWithoutFeedback onPress={() => { setAudience('Public'); alert("Audience Public is selected") }}>

                <Block row card marginTop={sizes.sm}>
                  <Block flex={0}>
                    <MaterialIcons name="public" size={60} color={colors.contrasting} />
                  </Block>
                  <Block justify="center" align="center">
                    <Text h4 bold>Public</Text>
                    <Text p>Anyone in your community</Text>
                  </Block>
                </Block>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => { setAudience('Friends'); alert("Audience Friends is selected") }}>
                <Block row card marginTop={sizes.sm}>
                  <Block flex={0}>
                    <FontAwesome5 name="user-friends" size={55} color={colors.contrasting}  />
                  </Block>
                  <Block justify="center" align="center">
                    <Text h4 bold>Friends</Text>
                    <Text p>All of your friends</Text>
                  </Block>
                </Block>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => { setAudience('Private'); alert("Audience Private is selected") }}>
                <Block row card marginTop={sizes.sm} >
                  <Block flex={0}>
                    <FontAwesome5 name="lock" size={55} color={colors.contrasting} />
                  </Block>
                  <Block justify="center" align="center">
                    <Text h4 bold>Private </Text>
                    <Text p>Only you can see</Text>
                  </Block>
                </Block>
              </TouchableWithoutFeedback>
            </Block>
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
              <Text h5 >{message}</Text>
            </Block>
          </ScrollView>
        </Modal>
      </Block>
    </TouchableWithoutFeedback>
  );
}
 
export default function Home(props) {
  const { translations, currentUser, getPosts, getMyPosts } = useData();
  // const [message, setMessage] = React.useState('');
  // const [showFailModal, setFailModal] = React.useState(false);

  const { assets, colors, gradients, sizes, icons, } = useTheme();
  const [posts, setPosts] = useState([]);
  let count = 0;
  useEffect(() => {
    async function fetchData() {
      try {
        const post = await getPosts();
        setPosts(post);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);
  // const url='https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80';
  return (
    <Block margin={5}  >
      <Block
        safeScroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: sizes.padding }}>
        <AddPost props={props} />
        {posts.map(element => {
          count++;
          let dateTime = element.createdAt.toDate().toString().split(" ");
          let date = dateTime[1] + " " + dateTime[2] + " " + dateTime[3];
          return (
            <Card key={count} date={date} user_name={element.userName} profile={element.userProfile} description={element.message} url={element.filePath} title={'My post'} />
          )
        })}
        {/* <Modal visible={showFailModal} onRequestClose={() => setFailModal(false)}>
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
        </Modal> */}
      </Block>
    </Block >
  );
}      