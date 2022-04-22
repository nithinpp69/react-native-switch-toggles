import React from 'react';

interface SwitchProps {
  /**
   * size of the switch
   */
  size?: number;
  /**
   * switch on/off state value
   */
  value: boolean;
  /**
   * enable/disable switch
   */
  disabled?: boolean;
  /**
   * callback on switch value change
   */
  onChange: (value: boolean) => void;
  /**
   * track color when switch value is true
   */
  activeTrackColor?: string;
  /**
   * track color when switch value is false
   */
  inactiveTrackColor?: string;
  /**
   * thumb color when switch value is true
   */
  activeThumbColor?: string;
  /**
   * thumb color when switch value is false
   */
  inactiveThumbColor?: string;
  /**
   * render a custom view on switch track when the switch value is true
   */
  renderOnIndicator?: () => React.ReactNode | null;
  /**
   * render a custom view on switch track when the switch value is false
   */
  renderOffIndicator?: () => React.ReactNode | null;
  /**
   * ender a custom view on switch thumb when the switch value is true
   */
  renderActiveThumbIcon?: () => React.ReactNode | null;
  /**
   * render a custom view on switch thumb when the switch value is false
   */
  renderInactiveThumbIcon?: () => React.ReactNode | null;
}

export type {
  SwitchProps,
};
