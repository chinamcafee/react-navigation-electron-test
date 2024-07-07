import { UnistylesRegistry } from 'react-native-unistyles'
import { breakpoints } from './breakpoints'
import { pinkTheme, blueTheme } from './themes'

type AppBreakpoints = typeof breakpoints
type AppThemes = {
  pinkTheme: typeof pinkTheme,
  blueTheme: typeof blueTheme
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

