const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const gold = '#E3A33D';
const white = '#FAFAFA';
const whiteBackground = '#E9E9E9';
const black = '#222222';
const blackBackground = '#333333';


export default {
  light: {
    text: black,
    background: whiteBackground,
    tint: tintColorLight,
    tabIconDefault: '#000',
    tabIconSelected: tintColorLight,
    backgroundRounded: white
  },
  dark: {
    text: white,
    background: black,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    backgroundRounded: blackBackground
  },
};
