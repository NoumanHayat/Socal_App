import React, { useCallback, useState } from 'react';
import {
  Image,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Block from './Block';
import Text from './Text';

import useTheme from '../hooks/useTheme';
import { useData } from '../hooks/';
import { IInputProps } from '../constants/types';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const Input = ({
  id = 'Input',
  style,
  color,
  primary,
  secondary,
  tertiary,
  black,
  white,
  gray,
  danger,
  warning,
  success,
  info,
  search,
  disabled,
  label,
  icon,
  marginBottom,
  marginTop,
  marginHorizontal,
  marginVertical,
  marginRight,
  marginLeft,
  vactoricon,
  vactorIconType,
  vactorIconName,
  vactorIconSize,
  vactorIconColor,
  onFocus,
  onBlur,
  password,
  onPress,
  ...props
}: IInputProps) => {
  const { assets, colors, sizes } = useTheme();
  const [isFocused, setFocused] = useState(false);
  const { isDark} = useData();
  const handleFocus = useCallback(
    (event, focus) => {
      setFocused(focus);
      focus && onFocus?.(event);
      !focus && onBlur?.(event);
    },
    [setFocused, onFocus, onBlur],
  );

  const colorIndex = primary
    ? 'primary'
    : secondary
      ? 'secondary'
      : tertiary
        ? 'tertiary'
        : black
          ? 'black'
          : white
            ? 'white'
            : gray
              ? 'gray'
              : danger
                ? 'danger'
                : warning
                  ? 'warning'
                  : success
                    ? 'success'
                    : info
                      ? 'info'


                      : null;
  const inputColor = color
    ? color
    : colorIndex
      ? colors?.[colorIndex]
      : colors.gray;

  const inputBoxStyles = StyleSheet.flatten([
    style,
    {
      minHeight: sizes.inputHeight,
      ...(marginBottom && { marginBottom: marginBottom }),
      ...(marginTop && { marginTop: marginTop }),
      ...(marginHorizontal && { marginHorizontal: marginHorizontal }),
      ...(marginVertical && { marginVertical: marginVertical }),
      ...(marginRight && { marginRight: marginRight }),
      ...(marginLeft && { marginLeft: marginLeft }),
    },
  ]) as ViewStyle;

  const inputContainerStyles = StyleSheet.flatten([
    {
      minHeight: sizes.inputHeight,
      borderRadius: sizes.inputRadius,
      borderWidth: isFocused ? 2 : sizes.inputBorder,
      borderColor: isFocused ? colors.focus : inputColor,
    },
  ]) as ViewStyle;

  const inputStyles = StyleSheet.flatten([
    {
      flex: 1,
      zIndex: 2,
      height: '100%',
      fontSize: sizes.p,
      color: colors.input,
      paddingHorizontal: sizes.inputPadding,
    },
  ]) as TextStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const inputID =
    Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };

  return (
    <Block flex={0} style={inputBoxStyles}>
      {label && (
        <Text bold marginBottom={sizes.s}>
          {label}
        </Text>
      )}
      <Block row align="center" justify="flex-end" style={inputContainerStyles}>
        {search && assets.search && (
          <Image
            source={assets.search}
            style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
          />
        )}
        {/* ========================================Vactor Icon===================================================== */}
        {vactoricon && (vactorIconType === 'Entypo') && (
          <Entypo style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'AntDesign') && (
          <AntDesign style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'EvilIcons') && (
          <EvilIcons style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'Feather') && (
          <Feather style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'FontAwesome') && (
          <FontAwesome style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'FontAwesome5') && (
          <FontAwesome5 style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'Fontisto') && (
          <Fontisto style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'Foundation') && (
          <Foundation style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'Ionicons') && (
          <Ionicons style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'MaterialCommunityIcons') && (
          <MaterialCommunityIcons style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'MaterialIcons') && (
          <MaterialIcons style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'Octicons') && (
          <Octicons style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'SimpleLineIcons') && (
          <SimpleLineIcons style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}
        {vactoricon && (vactorIconType === 'Zocial') && (
          <Zocial style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
            name={vactorIconName ? vactorIconName : "500px"} size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : (isDark ? '#FFFFFF':'#000000')} />
        )}

        {/* ========================================Vactor Icon===================================================== */}

        {icon && (
          <Image
            source={assets?.[icon]}
            style={{ marginLeft: sizes.inputPadding, tintColor: colors.icon }}
          />
        )}

        <TextInput
          {...inputID}
          {...props}
          style={inputStyles}
          editable={!disabled}
          placeholderTextColor={inputColor}
          onFocus={(event) => handleFocus(event, true)}
          onBlur={(event) => handleFocus(event, false)}
        />
        {danger && assets.warning && (
          <Image
            source={assets.warning}
            style={{
              marginRight: sizes.s,
              tintColor: colors.danger,
            }}
          />
        )}
        {success && assets.check && (
          <Image
            source={assets.check}
            style={{
              width: 12,
              height: 9,
              marginRight: sizes.s,
              tintColor: colors.success,
            }}
          />
        )}
        {password && (
          <TouchableOpacity onPress={onPress}>
            <AntDesign style={{ marginRight: sizes.inputPadding, tintColor: colors.icon }}
              name="eye" size={vactorIconSize ? vactorIconSize : 15} color={vactorIconColor ? vactorIconColor : "black"} />
          </TouchableOpacity>
        )}
      </Block>
    </Block>
  );


};

export default React.memo(Input);
