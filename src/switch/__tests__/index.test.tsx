import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {View} from 'react-native';

import Switch from '../index';

describe('render sWitch', () => {
  let onChange;
  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render switch component', () => {
    const {queryByTestId} = render(
      <Switch value={false} onChange={onChange} />
    );
    const component = queryByTestId('switch-button');
    expect(component).toBeDefined();
  });

  it('should call onChange function on switch press', () => {
    const {getByTestId} = render(<Switch value={false} onChange={onChange} />);
    const component = getByTestId('switch-button');
    expect(component).toBeDefined();
    fireEvent.press(component);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('should display on indicator if provided', () => {
    const {getByTestId} = render(
      <Switch
        value={false}
        onChange={onChange}
        renderOnIndicator={() => <View testID="on-indicator" />}
      />
    );
    const component = getByTestId('switch-button');
    expect(component).toBeDefined();
    expect(getByTestId('on-indicator')).toBeDefined();
  });

  it('should display off indicator if provided', () => {
    const {getByTestId} = render(
      <Switch
        value={false}
        onChange={onChange}
        renderOffIndicator={() => <View testID="off-indicator" />}
      />
    );
    const component = getByTestId('switch-button');
    expect(component).toBeDefined();
    expect(getByTestId('off-indicator')).toBeDefined();
  });

  it('should display active thumb icon if provided', () => {
    const {getByTestId} = render(
      <Switch
        value={false}
        onChange={onChange}
        renderActiveThumbIcon={() => <View testID="active-icon" />}
      />
    );
    const component = getByTestId('switch-button');
    expect(component).toBeDefined();
    expect(getByTestId('active-icon')).toBeDefined();
  });

  it('should display inactive thumb icon if provided', () => {
    const {getByTestId} = render(
      <Switch
        value={false}
        onChange={onChange}
        renderInactiveThumbIcon={() => <View testID="inactive-icon" />}
      />
    );
    const component = getByTestId('switch-button');
    expect(component).toBeDefined();
    expect(getByTestId('inactive-icon')).toBeDefined();
  });
});
