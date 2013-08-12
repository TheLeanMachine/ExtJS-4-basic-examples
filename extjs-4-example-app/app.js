Ext.define('Dmt.unit.Ninja', {
  config: { // default values for 'config' parameter of 'constructor' method!
    name: 'Da Ninja, man!',
  },

  constructor: function(config) {
    this.initConfig(config);
  },

  getName: function() { return this.name; }
});

var defaultNinja = Dmt.unit.Ninja.create();
var myNinja = Ext.create('Dmt.unit.Ninja', { name: 'Roooonin!' });


function makeP(content) {
  return '<p>' + content + '</p>';
}

Ext.application({
  name: 'HelloExt',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
          title: 'Hello Ext',
          html : makeP('Hello! Welcome to Ext JS.') + makeP(defaultNinja.getName()) + makeP(myNinja.getName()),
          cls: 'box'
        }
      ]
    });
  }
});
