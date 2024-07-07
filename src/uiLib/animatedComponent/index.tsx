import Animated from "react-native-reanimated";
import { Div,Text } from "~/uiLib/responsiveMagnus";

const AnimatedDiv = Animated.createAnimatedComponent(Div);
const AnimatedText = Animated.createAnimatedComponent(Text);

export {
    AnimatedDiv,
    AnimatedText
}