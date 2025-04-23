import { Dimensions } from 'react-native';
import type { TxtLineHeight, TxtSize, TypeWeightTxt } from '../types/types';

interface IStylesTxt {
  s?: TxtSize;
  lh?: TxtLineHeight;
  w?: TypeWeightTxt;
}

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

export const styleTypography = (props: IStylesTxt) => {
  //s la fontsize, lh la lineHeigh, w: fontWeight
  const { s = 18, lh = 28, w = 'regular' } = props;

  return {
    fontSize: s,
    lineHeight: lh,
    fontWeight: w,
  };
};
