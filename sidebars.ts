import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'introduction/index',
    {
      type: 'category',
      label: 'Part I: Fundamentals',
      items: [
        'anatomy/index',
        'kinematics-dynamics/index',
      ],
    },
    {
      type: 'category',
      label: 'Part II: Perception and Control',
      items: [
        'sensors-perception/index',
        'actuation-control/index',
      ],
    },
    {
      type: 'category',
      label: 'Part III: Advanced Topics and Applications',
      items: [
        'path-planning/index',
        'human-robot-interaction/index',
        'ai-learning/index',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendices/ros-setup',
        'appendices/python-env',
        'appendices/further-reading',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
