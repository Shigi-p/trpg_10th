import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Character } from "./index";

export default {
  title: "Molecule/Character",
  component: Character,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Character>;

const Template: ComponentStory<typeof Character> = (args) => (
  <Character {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
