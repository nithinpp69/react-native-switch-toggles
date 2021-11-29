import React, { useEffect, useMemo, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface SwitchProps {
  size?: number;
  value: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  activeTrackColor?: string;
  inactiveTrackColor?: string;
  activeThumbColor?: string;
  inactiveThumbColor?: string;
  renderOnIndicator?: () => React.ReactNode;
  renderOffIndicator?: () => React.ReactNode;
  renderActiveThumbIcon?: () => React.ReactNode;
  renderInactiveThumbIcon?: () => React.ReactNode;
}

const Switch: React.FC<SwitchProps> = ({
  size = 25,
  value,
  disabled = false,
  onChange,
  activeTrackColor = "rgba(255,255,255,0.6)",
  inactiveTrackColor = "rgba(0,0,0,0.2)",
  activeThumbColor = "white",
  inactiveThumbColor = "white",
  renderOnIndicator = () => null,
  renderOffIndicator = () => null,
  renderActiveThumbIcon = () => null,
  renderInactiveThumbIcon = () => null,
}) => {
  const translateX = useSharedValue(0);
  const [switchValue, setSwitchValue]  = useState(value);

  useEffect(() => {
    setSwitchValue(value);
  }, [value]);

  const switchWidth = useMemo(() => {
    return size * 1.8;
  }, [size]);

  const switchBorderRadius = useMemo(() => {
    return size / 2;
  }, [size]);

  const xTranslationValue = useMemo(() => {
    return switchWidth - size;
  }, [switchWidth, size]);

  const styleProps = useMemo(() => {
    return {
      switchWidth,
      switchHeight: size,
      switchBorderRadius,
      disabled,
    };
  }, [switchWidth, size, switchBorderRadius, disabled]);

  const thumbStyle = useAnimatedStyle(() => {
    const thumbColor = interpolateColor(
      translateX.value,
      [0, xTranslationValue],
      [inactiveThumbColor, activeThumbColor]
    );
    return {
      backgroundColor: thumbColor,
      transform: [{ translateX: translateX.value }],
    };
  });

  const trackStyle = useAnimatedStyle(() => {
    const trackColor = interpolateColor(
      translateX.value,
      [0, xTranslationValue],
      [inactiveTrackColor, activeTrackColor]
    );
    return {
      backgroundColor: trackColor,
    };
  });

  useEffect(() => {
    const toValue = switchValue ? xTranslationValue : 0;
    translateX.value = withTiming(toValue, undefined, () => {
      runOnJS(onChange)?.(switchValue);
    });
  }, [switchValue]);

  const onPress = () => {
    setSwitchValue(value => !value);
  };

  const onIndicatorStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [0, 1]
    );
    const translateY = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [-size, 0]
    );
    const scale = interpolate(translateX.value, [0, xTranslationValue], [0, 1]);
    return {
      opacity,
      transform: [{ translateY }, { scale }],
    };
  });

  const offIndicatorStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [1, 0]
    );
    const translateY = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [0, size]
    );
    const scale = interpolate(translateX.value, [0, xTranslationValue], [1, 0]);
    return {
      opacity,
      transform: [{ translateY }, { scale }],
    };
  });

  const thumbActiveStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [0, 1]
    );
    const translate = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [0, size/2]
    );
    return {
      opacity,
      transform: [ { translateX: translate }],
    };
  });

  const thumbInactiveStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [1, 0]
    );
    const translate = interpolate(
      translateX.value,
      [0, xTranslationValue],
      [-size / 2, 0]
    );
    return {
      opacity,
      transform: [ { translateX: translate }],
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      disabled={disabled}
      style={styles(styleProps).switchContainer}
    >
      <Animated.View style={[styles(styleProps).container, trackStyle]}>
        <Animated.View
          pointerEvents="none"
          style={[styles(styleProps).onIndicator, onIndicatorStyle]}
        >
          {renderOnIndicator()}
        </Animated.View>
        <Animated.View
          pointerEvents="none"
          style={[styles(styleProps).offIndicator, offIndicatorStyle]}
        >
          {renderOffIndicator()}
        </Animated.View>
        <Animated.View style={[styles(styleProps).thumb, thumbStyle]}>
          <Animated.View pointerEvents="none" style={[styles(styleProps).thumb,thumbActiveStyle]}>
            {renderActiveThumbIcon()}
          </Animated.View>
          <Animated.View pointerEvents="none" style={[styles(styleProps).thumb, thumbInactiveStyle]}>
            {renderInactiveThumbIcon()}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = (props) =>
  StyleSheet.create({
    switchContainer: {
      opacity: props.disabled ? 0.6 : 1,
    },
    container: {
      width: props.switchWidth,
      height: props.switchHeight,
      backgroundColor: "rgba(0,0,0,0.25)",
      borderRadius: props.switchBorderRadius,
      justifyContent: "center",
      overflow: "hidden",
    },
    thumb: {
      height: props.switchHeight - 10,
      width: props.switchHeight - 10,
      borderRadius: props.switchBorderRadius,
      margin: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    onIndicator: {
      width: "50%",
      height: "100%",
      backgroundColor: "transparent",
      position: "absolute",
      left: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    offIndicator: {
      width: "50%",
      height: "100%",
      backgroundColor: "transparent",
      position: "absolute",
      right: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    thumbIconContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Switch;
