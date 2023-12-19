import styles from './ProductDetailsSlider.module.scss';

export const getBorderColor = (
  i: number, currentSlide: number, isDarkTheme: boolean,
) => {
  let borderColor;

  switch (true) {
    case currentSlide === i && isDarkTheme:
      borderColor = styles['dots-border-dark-cur'];
      break;

    case currentSlide !== i && isDarkTheme:
      borderColor = styles['dots-border-dark'];
      break;

    case currentSlide === i && !isDarkTheme:
      borderColor = styles['dots-border-light-cur'];
      break;

    case currentSlide !== i && !isDarkTheme:
      borderColor = styles['dots-border-light'];
      break;

    default:
      break;
  }

  return borderColor;
};
