module.exports = {
  name: 'twaice-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/twaice-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
