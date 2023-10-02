 const themeColor = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    iron: "#D1D5DA",
    ironBright: "#D1D5DA4D",
    mercury: "#E5E5E5",
    grey: "#363636",
    mineShaft: "#252525",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    parsley: " #144620",
    shipCove: "#6D93BE",
    slateGray: "#6E7E91",
    violet: "#090A33",
    black: "#000000",
    shadowLight: "#090a3308",
    shadowDark: "#090a3305",
    tropicalBlue: "#CDE0F7",
    azure: "#35669E",
    tundora: "#414141",
  };
  const breakpoints = {
    mobileVerticalMax: "575px",
    mobileMax: "767px",
    tabletVerticalMax: "991px",
    tabletHorizontalMax: "1199px",
    laptopMax: "1392px",
  };
  export const lightTheme = {
primary: {
  text: themeColor.slateGray,
  background: themeColor.whiteLilac,
},
primaryBlue: {
  text: themeColor.scienceBlue,
  link: themeColor.scienceBlue,
  background: themeColor.scienceBlue,
},
header: {
  text: themeColor.mineShaft,
},
white: {
  text: themeColor.white,
},
section: {
  background: themeColor.white,
},
divider:{
  background: themeColor.iron,
},
svg:{
  fill: themeColor.mineShaft,
  fillIcon: themeColor.scienceBlue,
  hover: themeColor.scienceBlue,
},
svgTheme: {
  fillBackGround: themeColor.mercury,
  fillToggle: themeColor.slateGray,
  fillSun: themeColor.white,
},
shadow: {
  colorLight: themeColor.shadowLight,
  colorDark: themeColor.shadowDark,
},
border: {
  border: themeColor.iron,
  borderHover: themeColor.tropicalBlue,
},
breakpoints,
};

export const darkTheme = {
  primary: {
    text: themeColor.white,
    background: themeColor.mineShaft,
  },
  primaryBlue: {
    text: themeColor.white,
    link: themeColor.dodgerBlue,
    background: themeColor.dodgerBlue,
  },
  header: {
    text: themeColor.white,
  },
  white: {
    text: themeColor.white,
  },
  section: {
    background: themeColor.grey,
  },
  divider:{
    background: themeColor.mercury,
  },
  svg:{
    fill: themeColor.white,
    fillIcon: themeColor.dodgerBlue,
    hover: themeColor.dodgerBlue,
  },
  svgTheme: {
    fillBackGround: themeColor.slateGray,
    fillToggle: themeColor.white,
    fillSun: themeColor.mineShaft,
  },
  shadow: {
    colorLight: themeColor.shadowLight,
    colorDark: themeColor.shadowDark,
  },
  border: {
    border: themeColor.tundora,
    borderHover: themeColor.azure,
  },
  breakpoints,
};
 
 

