import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reminder-item', 'Integration | Component | reminder item', {
  integration: true
});

skip('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('title', 'title');
  this.set('date', 'today');
  this.set('notes', 'notes');

  this.render(hbs`{{reminder-item title=title date=date notes=notes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  // this.render(hbs`
  //   {{#reminder-item}}
  //     template block text
  //   {{/reminder-item}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
