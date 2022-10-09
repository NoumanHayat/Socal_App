import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Block, Button, Input, Image, Switch, Modal, Text } from '../../components/';
import { useTheme, useData } from '../../hooks/';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
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
export default function Home() {
  const { translations, currentUser, getMyPosts } = useData();

  const { assets, colors, gradients, sizes, icons, } = useTheme();
  const [posts, setPosts] = useState([]);
  let count = 0;
  useEffect(() => {
    async function fetchData() {
      try {
        const post = await getMyPosts();
        setPosts(post);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Block safeScroll flex={1}>
      <Block align="center" flex={1} >
        <ImageBackground source={assets.profileBackend} resizeMode="cover" style={{

          width: '100%',
          height: '85%',
        }}>
          <Block align="center" marginTop={'30%'} flex={1}  >
            <Image
              width={sizes.width * 0.50}
              height={sizes.width * 0.50}
              resizeMode="cover"
              padding={sizes.sm}
              paddingTop={0}
              radius={360}
              source={{ uri: currentUser.photoURL }}
            />
          </Block>
        </ImageBackground>
        <Block backgroundColor="gray" flex={1} padding={7} margin={5} radius={360} style={{ alignSelf: 'flex-end', position: 'absolute', top: '45%' }}>
          <TouchableOpacity onPress={() => { alert("Please nn") }}>
            <AntDesign name="camerao" size={34} color="black" />
          </TouchableOpacity>
        </Block>
      </Block>
      <Block flex={0} marginTop={6} justifyContent="center" alignItems="center">
        <Text transform="uppercase" h4 bold>{currentUser.displayName}</Text>
        <Text size={18}>Never ask me about Messenger</Text>
        <Block flexDirection="row">
          <Button gradient={gradients.primary} margin={3} padding={5} onPress={() => alert("Under Process")}>
            {/* <AntDesign name="plus" size={24} color="black" /> */}
            <Text p color={colors.matching}><AntDesign name="pluscircle" size={18} color="#FFFFFF" />  Add to Story</Text>
          </Button>
          <Button gradient={gradients.secondary} margin={3} padding={5} onPress={() => alert("Under Process")}>
            <Text p color={colors.matching}><AntDesign name="edit" size={18} color="#FFFFFF" />  Add to Story</Text>
          </Button>
          <Button gradient={gradients.secondary} margin={3} padding={5} onPress={() => alert("Under Process")}>
            {/* <AntDesign name="edit" size={18} color="#FFFFFF" /> */}
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </Button>
        </Block>
      </Block>
      <Block

        safeScroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 0 }}>
        {posts?.map(element => {
          count++;
          let dateTime = element.createdAt.toDate().toString().split(" ");
          let date = dateTime[1] + " " + dateTime[2] + " " + dateTime[3];
          return (
            <Card key={count} date={date} user_name={element.userName} profile={element.userProfile} description={element.message} url={element.filePath} title={'My post'} />
          )
        })}
      </Block>

    </Block>
  );
}