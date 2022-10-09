import React from 'react';
import { StyleSheet, Modal as RNModal, ViewStyle, Platform } from 'react-native';

import { useTheme } from '../hooks/';

import Block from './Block';
import Button from './Button';
import Image from './Image';
import { IModalProps } from '../constants/types';

const Modal = ({
  id = 'Modal',
  children,
  style,
  onRequestClose,
  position,
  ...props
}: IModalProps) => {
  const { assets, colors, sizes } = useTheme();
  const modalStyles = StyleSheet.flatten([style, {}]) as ViewStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const modalID =
    Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };
  if (position == "bottom") {
    return (
      <RNModal
        {...modalID}
        {...props}
        transparent
        style={modalStyles}
        animationType="slide"
        onRequestClose={onRequestClose}>
        <Block backgroundColor={colors.contrastingLight} justify="flex-end">
          <Block safe card flex={0} >
            <Button
              top={0}
              right={0}
              position="absolute"
              onPress={() => onRequestClose?.()}>
              <Image source={assets.close} color={colors.contrasting} />
            </Button>
            <Block
              flex={0}
              marginTop={sizes.xxl}

              paddingHorizontal={sizes.padding}>
              {children}
            </Block>
          </Block>
        </Block>
      </RNModal>
    );
  } else if (position == "top") {
    return (
      <RNModal
        {...modalID}
        {...props}
        transparent
        // style={modalStyles}
        animationType="slide"
        onRequestClose={onRequestClose}>
        <Block backgroundColor={colors.contrastingLight} top={-45} justify="flex-start">
          <Block safe card flex={0} >
            <Button
              top={0}
              right={0}
              position="absolute"
              onPress={() => onRequestClose?.()}>
              <Image source={assets.close} color={colors.contrasting} />
            </Button>
            <Block
              flex={0}
              marginTop={sizes.xxl}

              paddingHorizontal={sizes.padding}>
              {children}
            </Block>
          </Block>
        </Block>
      </RNModal>
    );
  }else {
    return (
      <RNModal
        {...modalID}
        {...props}
        transparent
        style={modalStyles}
        animationType={"fade"}
        onRequestClose={onRequestClose}>
        <Block backgroundColor={colors.contrastingLight} justify="center">
          <Block safe margin={sizes.padding} card flex={0} >
            <Button
              top={0}
              right={0}
              position="absolute"
              onPress={() => onRequestClose?.()}>
              <Image source={assets.close} color={colors.contrasting} />
            </Button>
            <Block
              flex={0}
              marginTop={sizes.xxl}

              paddingHorizontal={sizes.padding}>
              {children}
            </Block>
          </Block>
        </Block>
      </RNModal>
    );
  }


};

export default React.memo(Modal);
