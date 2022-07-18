import React, {useEffect, useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Colors from '../utils/colors';
import type {SwitchProps} from '../types';

import styles from './styles';

const Switch: React.FC<SwitchProps> = ({
  size = 25,
  value,
  disabled = false,
  onChange,
  activeTrackColor = Colors.activeTrackColor,
  inactiveTrackColor = Colors.inactiveTrackColor,
  activeThumbColor = Colors.white,
  inactiveThumbColor = Colors.white,
  renderOnIndicator = () => null,
  renderOffIndicator = () => null,
  renderActiveThumbIcon = () => null,
  renderInactiveThumbIcon = () => null,
}) => {
  const translateX: Animated.SharedValue<number> = useSharedValue(0);
  const [switchValue, setSwitchValue] = useState(value);

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
      transform: [{translateX: translateX.value}],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchValue, translateX, xTranslationValue]);

  const onPress = () => {
    setSwitchValue(_value => !_value);
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
      transform: [{translateY}, {scale}],
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
      transform: [{translateY}, {scale}],
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
      [0, size / 2]
    );
    const thumbColor = interpolateColor(
      translateX.value,
      [0, xTranslationValue],
      [inactiveThumbColor, activeThumbColor]
    );
    return {
      backgroundColor: thumbColor,
      opacity,
      transform: [{translateX: translate}],
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
    const thumbColor = interpolateColor(
      translateX.value,
      [0, xTranslationValue],
      [inactiveThumbColor, activeThumbColor]
    );
    return {
      backgroundColor: thumbColor,
      opacity,
      transform: [{translateX: translate}],
    };
  });

  return (
    <TouchableOpacity
      testID="switch-button"
      activeOpacity={1}
      onPress={onPress}
      disabled={disabled}
      style={styles(styleProps).switchContainer}>
      <Animated.View style={[styles(styleProps).container, trackStyle]}>
        <Animated.View
          pointerEvents="none"
          style={[styles(styleProps).onIndicator, onIndicatorStyle]}>
          {renderOnIndicator?.()}
        </Animated.View>
        <Animated.View
          pointerEvents="none"
          style={[styles(styleProps).offIndicator, offIndicatorStyle]}>
          {renderOffIndicator?.()}
        </Animated.View>
        <Animated.View style={[styles(styleProps).thumb, thumbStyle]}>
          <Animated.View
            pointerEvents="none"
            style={[styles(styleProps).thumb, thumbActiveStyle]}>
            {renderActiveThumbIcon()}
          </Animated.View>
          <Animated.View
            pointerEvents="none"
            style={[styles(styleProps).thumb, thumbInactiveStyle]}>
            {renderInactiveThumbIcon?.()}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};
export default Switch;
