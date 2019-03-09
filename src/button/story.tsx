import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <ThemeProvider theme={theme}>
      <Button
        text={text('Button Text', 'Click Here')}
        onClick={action('Button Clicked')}
        isLoading={boolean('Is Loading', false)}
        buttonType={select('Button Type', ['default', 'action', 'success', 'error'], 'default')}
      />
    </ThemeProvider>
  ));
