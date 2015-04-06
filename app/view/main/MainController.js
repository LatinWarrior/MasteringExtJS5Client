/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Packt.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'Packt.util.Util'
    ],

    alias: 'controller.main',

    onLogout: function (button, e, options) {

        var me = this;

        Ext.Ajax.request({
            url: 'http://localhost:10108/api/authentication/logout',
            scope: me,
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },

    onLogoutSuccess: function (conn, response, options, eOpts) {
        var result = Packt.util.Util.decodeJSON(conn.responseText);

        if (result.success) {
            this.getView().destroy();
            window.location.reload();
        } else {
            Packt.util.Util.showErrorMsg(result.msg);
        }
    },

    onLogoutFailure: function (conn, response, options, eOpts) {
        Packt.util.Util.showErrorMsg(conn.responseText);
    },

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
