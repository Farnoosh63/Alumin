import { moduleForModel, test } from 'ember-qunit';

moduleForModel('wood/door', 'Unit | Model | wood/door', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
