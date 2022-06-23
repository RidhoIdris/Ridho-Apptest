import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainBottomTabParamList} from '../screen/MainScreen/mainBottomTabParams';
import {RootStackParamList} from '../screen/RootStackPrams';

export type RouteScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<MainBottomTabParamList>
>;
