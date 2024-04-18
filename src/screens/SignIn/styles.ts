import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import {styled} from 'styled-components';
import theme from '../../theme';
export const Container = styled(ImageBackground)`
  flex: 1;
  border-radius: 6px;
  padding: 52px;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XXXL};
  color: ${theme.COLORS.BRAND_MID};
  text-align: center;
`;

export const Slogan = styled(Text)`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD};
  color: ${theme.COLORS.GRAY_100};
  text-align: center;
  margin-bottom: 32px;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${theme.COLORS.BRAND_MID};
  width: 300px;
  height: 50px;
  border-radius: 5px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled(Text)`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.LG};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;
