import { Colors, Typography } from './style';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors;
    typography: Typography;
  }
}
