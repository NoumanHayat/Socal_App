import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useData, useTheme } from '../hooks';
import { Home, Notification, Profile, Setting } from './Dashboard';
import { Block, Text, Image } from '../components/';
import { TouchableWithoutFeedback } from 'react-native';

const Tab = createBottomTabNavigator();
const Card = (props) => {
  const { colors, gradients, icons, sizes } = useTheme();
  return (
    <TouchableWithoutFeedback >
      <Block card padding={sizes.sm} marginTop={sizes.sm}>
        <Image
          height={170}
          resizeMode="cover"
          source={{
            uri: props.url,
          }}
        />
        {/* article category */}

        {/* article description */}
        {/* <Text
          h5
          bold
          size={13}
          marginTop={sizes.s}
          transform="uppercase"
          marginLeft={sizes.xs}
          gradient={gradients.primary}>
          {props.title}
        </Text> */}
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

        {/* location & rating */}
      </Block>
    </TouchableWithoutFeedback>
  );
};
export default function App() {
  
  const { translations } = useData();
  const { assets, colors, gradients, sizes, icons } = useTheme();
  return (
    <Tab.Navigator independent={true}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // position: "absolute",
          justifyContent: "center",
          alignItems: "center",

          elevation: 10,
          backgroundColor: colors.contrasting,
          height: 60,
        },
      }}    >
      <Tab.Screen name={translations.dashboardNavigation.Home} component={Home}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Block TabBarIcon>
                <Image source={icons.register} resizeMode='contain' width={25} height={25} style={{
                  tintColor: focused ? colors.primary : colors.matching
                }} />
              </Block>
            )
          },
          headerStyle: {
            backgroundColor: '#EDF3F7',
            borderRadius: 10,
          },
          headerTintColor: '#000203',
          title: translations.dashboardScreen.Home,
        }}
      />
      <Tab.Screen name={translations.dashboardNavigation.Notification} component={Notification}
        options={{
          tabBarIcon({ focused }) {
            return (
              <Block TabBarIcon>
                <Image source={icons.documentation} resizeMode='contain' width={25} height={25} style={{
                  tintColor: focused ? colors.primary : colors.matching
                }} />
              </Block>
            )
          },
          headerStyle: {
            backgroundColor: '#EDF3F7',

          },
          headerTintColor: '#000203',
          title: translations.dashboardScreen.Notification,
        }}
      />
      <Tab.Screen name={translations.dashboardNavigation.Profile} component={Profile} options={{
        tabBarIcon({ focused }) {
          return (
            <Block TabBarIcon>
              <Image source={icons.profile} resizeMode='contain' width={25} height={25} style={{
                tintColor: focused ? colors.primary : colors.matching
              }} />
            </Block>
          )
        }, headerStyle: {
          backgroundColor: '#EDF3F7',

        },
        headerTintColor: '#000203',
        title: translations.dashboardScreen.Profile,
      }} />
      <Tab.Screen name={translations.dashboardNavigation.Setting} component={Setting} options={{
        tabBarIcon({ focused }) {
          return (
            <Block TabBarIcon>
              <Image source={icons.settings} resizeMode='contain' width={25} height={25} style={{
                tintColor: focused ? colors.primary : colors.matching
              }} />
            </Block>
          )
        }, headerStyle: {
          backgroundColor: '#EDF3F7',

        },
        headerTintColor: '#000203',
        title: translations.dashboardScreen.Setting,
      }} />
    </Tab.Navigator>
  );
}

