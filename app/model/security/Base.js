/**
 * Created by luis_blanco on 4/11/2015.
 */
Ext.define('Packt.model.security.Base', {

    extend: 'Ext.data.Model',

    requires: [
        'Packt.util.Util'
    ],

    idProperty: 'id',

    fields: [
        {name: 'id', type: 'int'}
    ],

    schema: {
        namespace: 'Packt.model.security',
        urlPrefix: 'http://localhost:10108/api',
        proxy: {
            // Proxy code here.
            type: 'ajax',
            api:{
                read: '{prefix}/users',
                create: '',
                update: '',
                destroy: ''
            },
            reader:{
                type: 'json',
                rootProperty: ''
            },
            writer:{
                type: 'json',
                writeAllFields: true,
                encode: true,
                rootProperty: '',
                allowSingle: false
            },
            listeners:{
                exception: function(proxy, response, operation){
                    Packt.util.Util.showErrorMsg(response.responseText);
                }
            }
        }
    }
});