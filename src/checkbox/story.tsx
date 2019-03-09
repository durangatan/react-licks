import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '.';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => (
    <ThemeProvider theme={theme}>
      <Checkbox
        onChange={action('Checked')}
        name={text('Checkbox name', 'checkbox')}
        label={text('Checkbox Label', 'Check Me!')}
        checked={boolean('Checked?', false)}
      />
    </ThemeProvider>
  ));
