import {TextInput as ReactTextInput} from 'react-native';
import React from 'react';
import {Fonts} from '../constant';

type InputProps = React.ComponentProps<typeof ReactTextInput>;

const TextInput: React.FunctionComponent<InputProps> = props => {
  return (
    <ReactTextInput
      {...props}
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
  );
};

export default TextInput;
