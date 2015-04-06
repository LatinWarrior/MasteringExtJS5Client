/**
 * Created by luis_blanco on 4/5/2015.
 */
Ext.define('Packt.store.Menu', {
    extend: 'Ext.data.Store',
    requires: [
        'Packt.util.Util'
    ],

    model: 'Packt.model.menu.Accordion',    // Anonymous model instead of using the fields configuration.

    proxy: {
        type: 'ajax',
        url: 'http://localhost:10108/api/menus',
        reader: {
            type: 'json',
            rootProperty: ''
        },
        listeners: {
            exception: function (proxy, response, operation) {
                Packt.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});