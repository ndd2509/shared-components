import { Dimensions } from 'react-native';

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const space_default = 4;
export const space_squish = ({
  vertical = space_default,
  horizontal = space_default,
}: {
  vertical?: number;
  horizontal?: number;
}) => {
  return {
    paddingVertical: vertical,
    paddingHorizontal: horizontal,
  };
};
