/**
 * Created by luis_blanco on 4/11/2015.
 */
Ext.define('Packt.model.security.User', {

    extend: 'Packt.model.security.Base',

    fields: [
        {name: 'name'},
        {name: 'userName'},
        {name: 'email'},
        {name: 'picture'},
        {name: 'groupId', type: 'int'}
    ]
});