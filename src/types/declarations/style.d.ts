import colors from '../../styles/GlobalTheme/colors';
import typography from '../../styles/GlobalTheme/typography';

type Colors = typeof colors;

type Typography = typeof typography;

type FontSize = keyof Typography['fontSize'];

type LineHeight = keyof Typography['lineHeight'];

type FontWeight = keyof Typography['fontWeight'];

export { Colors, Typography, FontSize, LineHeight, FontWeight };
