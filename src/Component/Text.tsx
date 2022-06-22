import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {Fonts} from '../constant';

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const Text = ({style, children}: TextProps) => {
  return <ReactText style={[styles.font, style]}>{children}</ReactText>;
};

const styles = StyleSheet.create({
  font: {
    fontFamily: Fonts.mrRegular,
  },
});

export default Text;
