import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TestComponentComponent } from './test-component.component';

export default {
  title: 'TestComponentComponent',
  component: TestComponentComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TestComponentComponent>;

const Template: Story<TestComponentComponent> = (args: TestComponentComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}