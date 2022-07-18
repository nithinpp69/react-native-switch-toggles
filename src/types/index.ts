import type {ReactNode} from 'react';

interface SwitchProps {
  /**
   * size of the switch. Use this prop to set the size of the
   * switch.
   *
   * @default 25
   */
  size?: number;
  /**
   * switch on/off state value. Pass this prop to set the initial
   * state of the switch.
   */
  value: boolean;
  /**
   * enable/disable switch. Use this prop to enable/disable the
   * switch.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * callback on switch value change. This is useful if you want to
   * run a function when the switch value changes.
   *
   * @param value - switch value
   */
  // eslint-disable-next-line no-unused-vars
  onChange: (value: boolean) => void;
  /**
   * track color when switch value is true. Use this to customize the
   * switch track color when switch value is true.
   *
   * @default 'rgba(255,255,255,0.6)'
   */
  activeTrackColor?: string;
  /**
   * track color when switch value is false. Use this to customize the
   * switch track color when switch value is false.
   *
   * @default 'rgba(0,0,0,0.2)
   */
  inactiveTrackColor?: string;
  /**
   * thumb color when switch value is true. Use this to customize the
   * switch thumb color when switch value is true.
   *
   * @default '#ffffff
   */
  activeThumbColor?: string;
  /**
   * thumb color when switch value is false. Use this to customize the
   * switch thumb color when switch value is false.
   *
   * @default '#ffffff
   */
  inactiveThumbColor?: string;
  /**
   * render a custom view on switch track when the switch value is true.
   */
  renderOnIndicator?: () => ReactNode | null;
  /**
   * render a custom view on switch track when the switch value is false
   */
  renderOffIndicator?: () => ReactNode | null;
  /**
   * ender a custom view on switch thumb when the switch value is true
   */
  renderActiveThumbIcon?: () => ReactNode | null;
  /**
   * render a custom view on switch thumb when the switch value is false
   */
  renderInactiveThumbIcon?: () => ReactNode | null;
}

export type {SwitchProps};
