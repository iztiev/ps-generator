import type { Meta, StoryObj } from '@storybook/svelte';

import Letter from './index.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Letter',
  component: Letter,
  tags: ['autodocs'],
  argTypes: {
    letter: { control: 'text' },
    isAnswer: {
      control: { type: 'boolean' },
      options: [true, false],
    },
  },
} satisfies Meta<Letter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    letter: 'А',
    isAnswer: false,
  },
};
