import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '587'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '711'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '96b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e47'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '14d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '462'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b57'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '75b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '23a'),
    routes: [
      {
        path: '/docs/category/license---gpl',
        component: ComponentCreator('/docs/category/license---gpl', '46b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gpl/agplv3',
        component: ComponentCreator('/docs/gpl/agplv3', '2c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gpl/fdlv1.3',
        component: ComponentCreator('/docs/gpl/fdlv1.3', '086'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gpl/gplv1',
        component: ComponentCreator('/docs/gpl/gplv1', 'a14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gpl/gplv2',
        component: ComponentCreator('/docs/gpl/gplv2', '21e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gpl/gplv3',
        component: ComponentCreator('/docs/gpl/gplv3', '3b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gpl/lgplv2.1',
        component: ComponentCreator('/docs/gpl/lgplv2.1', 'cff'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'add'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
