export const chooseIconColor = (
  isDarkTheme: boolean, isNotDisabled:boolean,
) => {
  let iconColor;

  switch (true) {
    case isDarkTheme && !isNotDisabled:
      iconColor = '#3b3e4a';
      break;

    case isDarkTheme:
      iconColor = '#f1f2f9';
      break;

    case !isNotDisabled:
      iconColor = '#b4bdc3';
      break;

    default:
      iconColor = '#0f0f11';
  }

  return iconColor;
};

export const chooseArrowColor = (
  isHover: boolean,
  isNotDisabled:boolean,
  isDarkTheme: boolean,
) => {
  let arrowBorder;

  switch (true) {
    case isDarkTheme && !isNotDisabled && isHover:
      arrowBorder = '#3b3e4a';
      break;

    case isDarkTheme && !isNotDisabled && !isHover:
      arrowBorder = '#3b3e4a';
      break;

    case isDarkTheme && isNotDisabled && isHover:
      arrowBorder = '#4a4d58';
      break;

    case isDarkTheme && isNotDisabled && !isHover:
      arrowBorder = '#323542';
      break;

    case !isNotDisabled:
      arrowBorder = '#e2e6e9';
      break;

    case !isNotDisabled && isHover:
      arrowBorder = '#e2e6e9';
      break;

    case isHover:
      arrowBorder = '#0f0f11';
      break;

    default:
      arrowBorder = '#b4bdc3';
      break;
  }

  return arrowBorder;
};

export const chooseBackgroundColor = (
  isHover: boolean,
  isNotDisabled:boolean,
  isDarkTheme: boolean,
) => {
  let backgroundColor;

  switch (true) {
    case !isNotDisabled && isDarkTheme && isHover:
      backgroundColor = '#0f1121';
      break;

    case !isNotDisabled && isDarkTheme && !isHover:
      backgroundColor = '#0f1121';
      break;

    case isNotDisabled && isDarkTheme && isHover:
      backgroundColor = '#4a4d58';
      break;

    case isNotDisabled && isDarkTheme && !isHover:
      backgroundColor = '#323542';
      break;

    default:
      backgroundColor = '#fff';
      break;
  }

  return backgroundColor;
};
