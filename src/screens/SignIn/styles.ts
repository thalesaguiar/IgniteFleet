import {ImageBackground, Text} from 'react-native';
import {styled} from 'styled-components';
import theme from '../../theme';
export const Container = styled(ImageBackground)`
  flex: 1;
  border-radius: 6px;
  justify-content: center;
  padding: 52px;
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
