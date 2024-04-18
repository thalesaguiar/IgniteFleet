import {Text, TouchableOpacity} from 'react-native';
import {styled} from 'styled-components';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: '#f3f3';
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-family: 'Roboto-Bold';
  font-size: 50;
  color: 'red';
`;
