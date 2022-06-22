const baseFontSize = 14;

const settings = {
  // Default fonts
  primaryFont: {
    light: 'Nunito-Light',
    regular: 'Nunito-Regular',
    semiBold: 'Nunito-SemiBold',
    bold: 'Nunito-Bold',
    extraBold: 'Nunito-ExtraBold',
  },

  fontSize: {
    small: baseFontSize * 0.8, // 11px
    default: baseFontSize, // 14px
    large: baseFontSize * 1.5, // 21px
    xLarge: baseFontSize * 2.5, // 35px
  },

  letterSpacing: 0.5,
};

export default {
  text: {
    small: () => {
      return {
        fontFamily: settings.primaryFont.regular,
        fontSize: settings.fontSize.small,
        letterSpacing: settings.letterSpacing,
      };
    },
    regular: () => {
      return {
        fontFamily: settings.primaryFont.regular,
        fontSize: settings.fontSize.default,
        letterSpacing: settings.letterSpacing,
      };
    },
    large: () => {
      return {
        fontFamily: settings.primaryFont.regular,
        fontSize: settings.fontSize.large,
        letterSpacing: settings.letterSpacing,
      };
    },
  },

  mrBold: settings.primaryFont.bold,
  mrSemiBold: settings.primaryFont.semiBold,
  mrExtraBold: settings.primaryFont.extraBold,
  mrRegular: settings.primaryFont.regular,
  mrLight: settings.primaryFont.light,
};
