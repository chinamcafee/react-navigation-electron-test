import color from 'color';

import { getThemeColor } from '../../theme/theme.service';
import { ButtonProps } from './button.type';
import { ThemeType } from '../../theme/type';
import { ColorValue, StyleSheet } from "react-native";

/**
 * returns underlay color
 *
 * @param theme
 * @param props
 */
export const getUnderlayColor = (theme: ThemeType, props: ButtonProps) => {
  const style = StyleSheet.flatten(props.style);
  let defaultUnderlayColor: ColorValue | undefined = "";
  if(style && typeof style === "object" && "backgroundColor" in style && style.backgroundColor) {
    defaultUnderlayColor = style.backgroundColor
  }else{
    defaultUnderlayColor = getThemeColor(theme.colors, props.bg);
  }
  return getThemeColor(
    theme.colors,
    props.underlayColor
      ? props.underlayColor
      : color(defaultUnderlayColor).darken(0.1).rgb().string()
  );
};

/**
 * return ripple color
 *
 * @param theme
 * @param props
 */
export const getRippleColor = (theme: ThemeType, props: ButtonProps) => {
  return color(getThemeColor(theme.colors, props.rippleColor))
    .alpha(props.disabled ? 0 : 0.2)
    .rgb()
    .string();
};
