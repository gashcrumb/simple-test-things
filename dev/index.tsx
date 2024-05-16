import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { simpleTestThingsPlugin, TestInfoCard } from '../src/plugin';

createDevApp()
  .registerPlugin(simpleTestThingsPlugin)
  .addPage({
    element: <TestInfoCard />,
    title: 'Root Page',
    path: '/simple-test-components'
  })
  .render();
