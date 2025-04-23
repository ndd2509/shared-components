import {
  FlatList,
  type FlatListProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

export interface IFlatlist<T = any> extends FlatListProps<T> {
  style?: StyleProp<ViewStyle>;
}

interface FlatlistProps<T> extends IFlatlist<T> {}

const Flatlist = <T,>({ style, ...props }: FlatlistProps<T>) => {
  return <FlatList style={style} {...props} />;
};

export default Flatlist;
