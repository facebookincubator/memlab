/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+ws_labs
 * @nolint
 * @format
 */

/**
 * * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: ['intro', 'installation', 'getting-started', 'how-memlab-works', {
    type: 'category',
    label: 'API',
    link: {type: 'doc', id: 'api/index'},
    collapsible: false,
    items: ['api/scenario', 'api/working-dir', 'api/heap-query']
  }]
};

module.exports = sidebars;
