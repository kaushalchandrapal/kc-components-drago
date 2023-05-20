import { TextFieldPage } from '../components/TextFieldPage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/TextFieldPage',
  component: TextFieldPage,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Layout = {
  args: {
    name: 'Kaushal'
  },
};