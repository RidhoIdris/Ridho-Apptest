import React from 'react';
import {TouchableWithoutFeedback, Keyboard, View} from 'react-native';

type ViewProps = React.ComponentProps<typeof View> & {
  children: React.ReactNode;
};
const DismissKeyboardHOC = (Comp: any) => {
  return ({children, ...props}: ViewProps) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View);

export default DismissKeyboardView;
