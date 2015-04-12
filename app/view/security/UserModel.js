/**
 * Created by luis_blanco on 4/11/2015.
 */
Ext.define('Packt.view.security.UserModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.user',

    stores: {
        users: {
            model: 'Packt.model.security.User',
            autoLoad: true
        }
    }
});