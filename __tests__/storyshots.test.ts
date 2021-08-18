/**
 * @jest-environment jsdom
 */

import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

const reactTestingLibrarySerializer = {
  // eslint-disable-next-line testing-library/no-node-access
  print: (val, serialize, indent) => serialize(val.container.firstChild),
  test: (val) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer],
});
