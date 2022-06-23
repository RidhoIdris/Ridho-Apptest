import {TextInput as ReactTextInput, View} from 'react-native';
import React from 'react';
import {Fonts} from '../constant';
import {FormikProps} from 'formik';
import Text from './Text';

type InputProps = React.ComponentProps<typeof ReactTextInput> & {
  formik?: FormikProps<any>;
  name: string;
  isNumber?: boolean;
  isNoSpace?: boolean;
};

const TextInput: React.FunctionComponent<InputProps> = props => {
  return (
    <View>
      <ReactTextInput
        {...props}
        onChangeText={text =>
          props.formik?.setFieldValue(
            props.name,
            props.isNumber
              ? text.replace(/[^0-9]/g, '')
              : props.isNoSpace
              ? text.replace(/ /g, '')
              : text,
          )
        }
        value={props.formik?.values[props.name]}
        style={{
          backgroundColor: '#F7F8FA',
          paddingHorizontal: 18,
          paddingVertical: 12,
          borderRadius: 6,
          fontFamily: Fonts.mrSemiBold,
          fontSize: 24,
          marginTop: 8,
        }}
      />
      {props?.formik?.errors[props.name] && props?.formik?.touched[props.name] && (
        <Text
          style={{
            color: '#dc2626',
            fontSize: 14,
          }}>
          {props?.formik?.errors[props.name]}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
