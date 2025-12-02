import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Docusaurus configuration for GitHub Pages deployment

const config: Config = {
  title: 'Humanoid Robots: A Comprehensive Guide',
  tagline: 'Exploring the Future of Human-like Robotics',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // Production URL
  url: 'https://zainabsiddiqui833251.github.io', // GitHub Pages URL
  baseUrl: '/humanoid-robot-book/',              // Repo name as path

  // GitHub pages deployment config
  organizationName: 'zainabsiddiqui833251', // GitHub username
  projectName: 'humanoid-robot-book',       // Repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Humanoid Robots',
      logo: {
        alt: 'Humanoid Robots Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/zainabsiddiqui833251/humanoid-robot-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact & Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zainabsiddiqui833251',
              target: '_blank',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/zainab-siddiqui-822139283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
              target: '_blank',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/sidd94699?t=8RNf5q30qQGMD2ZVp2ojXw&s=09',
              target: '_blank',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@zainabsiddiqui511?si=domrRRUq30qQGMD2ZVp2ojXw',
              target: '_blank',
            },
            {
              label: 'Discord: zainabsiddiqui0115',
              href: '#',
              target: '_blank',
            },
            {
              label: 'Gmail: zs833251@gmail.com',
              href: 'mailto:zs833251@gmail.com',
              target: '_blank',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robots Book. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
