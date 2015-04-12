/**
 * Created by luis_blanco on 3/29/2015.
 */


Ext.define('Packt.view.login.Login', {
    extend: 'Ext.window.Window',
    requires: [
        'Packt.view.login.LoginController',
        'Packt.view.locale.Translation'
    ],
    controller: 'login',
    xtype: 'login-dialog',  // Or alias: 'widget.login-dialog'
    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 70,
            allowBlank: false,
            vtype: 'alphanum',
            minLength: 3,
            msgTarget: 'under',
            listeners: {
                specialKey: 'onTextFieldSpecialKey'
            }
        },
        items: [{
            name: 'userName',
            fieldLabel: translations.user,
            maxLength: 25
        }, {
            inputType: 'password',
            name: 'password',
            fieldLabel: translations.password,
            maxLength: 15,
            vtype: 'customPass',
            msgTarget: 'side',
            id: 'password',
            enableKeyEvents: true,
            listeners: {
                keypress: 'onTextFieldKeyPress'
            }
        }]
    }],
    iconCls: 'fa fa-key fa-lg',
    title: translations.login,
    closeAction: 'hide',
    closable: false,
    draggable: false,
    resizable: false,
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            xtype: 'translation'
        },{
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            iconCls: 'fa fa-times fa-lg',
            text: translations.cancel,
            listeners: {
                click: 'onButtonClickCancel'
            }
        }, {
            xtype: 'button',
            formBind: true,
            iconCls: 'fa fa-sign-in fa-lg',
            text: translations.submit,
            listeners: {
                click: 'onButtonClickSubmit'
            }
        }
        ]
    }]
});
