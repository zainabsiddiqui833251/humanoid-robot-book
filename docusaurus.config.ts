import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Humanoid Robots: A Comprehensive Guide',
  tagline: 'Exploring the Future of Human-like Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://humanoid-robots-book.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-organization', // Replace with your GitHub org/user name.
  projectName: 'humanoid-robots-book', // Replace with your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/docs',
          // Set the home page for your docs to 'introduction'
          // This is necessary because we renamed 'intro' to 'introduction'
          // and the default docusaurus config expects 'intro' as the home page
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Humanoid Robots',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/your-organization/humanoid-robots-book',
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
              href: '#', // No direct link for username, use '#' or leave empty
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
  } satisfies Preset.ThemeConfig
};

export default config;
