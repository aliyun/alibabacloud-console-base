/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';

import pkgInfo from '../package.json';
import CopyIt from '../src';

describe(pkgInfo.name, () => {
  it('render', () => {
    const tree = renderer.create(<CopyIt text="hello world!" />).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
