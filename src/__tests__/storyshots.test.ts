/**
 * @jest-environment jsdom
 */

import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@/utilities/test-utils';

import MatchMediaMock from 'jest-matchmedia-mock';
let matchMedia;

const reactTestingLibrarySerializer = {
  // eslint-disable-next-line testing-library/no-node-access
  print: (val, serialize, indent) => serialize(val.container.firstChild),
  test: (val) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer],
});
