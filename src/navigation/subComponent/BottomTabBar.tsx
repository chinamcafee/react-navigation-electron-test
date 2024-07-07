import React, { useRef } from 'react';
import { TouchableWithoutFeedback, Platform, View, useWindowDimensions, LayoutChangeEvent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, Icon, Image } from '~/uiLib/responsiveMagnus';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface CustomTabBarProps extends BottomTabBarProps {}

const BottomTabBar: React.FC<CustomTabBarProps> = (props) => {
    const indicatorWidth = useWindowDimensions().width / 5;
    const middleIconHeight = 40;
    const tabBarHeight = 50;
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const contentOffset = useSharedValue(0);
    const indicatorPosition = useRef(0);

    const handlSlide = (index: number) => {
        console.log("you click index is ", index);
        contentOffset.value = withSpring(index * indicatorWidth, {
            damping: 14,
            stiffness: 150
        });
    };

    const onLayout = (event: LayoutChangeEvent) => {
        handlSlide(indicatorPosition.current);
    };

    const renderTab = (index: number) => {
        return (
            <View style={{ height: tabBarHeight, width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                {renderIcon(index)}
            </View>
        );
    };

    const renderIcon = (index: number) => {
        const isSelected = index === props.state.index;
        switch (index) {
            case 0:
                return <Icon name="home-heart" fontFamily="MaterialCommunityIcons" fontSize={30} color={isSelected ? "#D462F7" : '#a5a5a5'} />;
            case 1:
                return <Icon name="message-text-clock" fontFamily="MaterialCommunityIcons" fontSize={25} color={isSelected ? "#D462F7" : '#a5a5a5'} />;
            case 2:
                return (
                    <View style={{ height: middleIconHeight, aspectRatio: 1, backgroundColor: isSelected ? "#D462F7" : '#a5a5a5', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Image h={20} aspectRatio={1} source={require('~/assets/img/mainTab/middleIcon.png')} />
                    </View>
                );
            case 3:
                return <Icon name="notifications" fontFamily="Ionicons" fontSize={25} color={isSelected ? "#D462F7" : '#a5a5a5'} />;
            case 4:
                return <Image h={24} aspectRatio={1} source={isSelected ? require('~/assets/icons/logo_active.png') : require('~/assets/icons/logo_disable.png')} />;
        }
    };

    const animatedIndicatorStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: contentOffset.value }],
        };
    });

    return (
        <View style={{
            height: Platform.OS === "android" ? tabBarHeight + 10 : tabBarHeight + 15,
            width: "100%",
            paddingBottom: Platform.OS === "android" ? 0 : 40,
            backgroundColor: "white",
        }}>
            <View style={{ height: 5, width: "100%" }}>
                {indicatorPosition.current !== 2 ? (
                    <Animated.View
                        style={[
                            {
                                width: indicatorWidth,
                                height: "100%",
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                backgroundColor: "#D462F7",
                            },
                            animatedIndicatorStyle
                        ]}
                        onLayout={onLayout}
                    />
                ) : null}
            </View>
            <View style={{
                height: "100%",
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                {props.state.routeNames.map((routeName, index) => {
                    return (
                        <TouchableWithoutFeedback
                            onPress={() => {
                                indicatorPosition.current = index;
                                handlSlide(index);
                                props.navigation.navigate(routeName);
                            }}
                            key={routeName}
                        >
                            {renderTab(index)}
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </View>
    );
};

export default BottomTabBar;
