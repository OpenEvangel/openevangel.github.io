import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '5bb'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '2f7'),
    routes: [
      {
        path: '/en/docs/category/license---gpl',
        component: ComponentCreator('/en/docs/category/license---gpl', '514'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/gpl/agplv3',
        component: ComponentCreator('/en/docs/gpl/agplv3', 'e7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/gpl/fdlv1.3',
        component: ComponentCreator('/en/docs/gpl/fdlv1.3', '466'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/gpl/gplv1',
        component: ComponentCreator('/en/docs/gpl/gplv1', '8a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/gpl/gplv2',
        component: ComponentCreator('/en/docs/gpl/gplv2', '0e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/gpl/gplv3',
        component: ComponentCreator('/en/docs/gpl/gplv3', 'cca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/gpl/lgplv2.1',
        component: ComponentCreator('/en/docs/gpl/lgplv2.1', '633'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '0eb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
