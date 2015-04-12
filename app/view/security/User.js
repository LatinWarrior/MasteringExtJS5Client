/**
 * Created by luis_blanco on 4/11/2015.
 */
Ext.define('Packt.view.security.User', {

    extend: 'Ext.panel.Panel',

    //xtype: 'user',

    alias: 'widget.user',

    requires: [
        'Packt.view.security.UsersGrid',
        'Packt.view.security.UserModel',
        'Packt.view.security.UserController',
        'Packt.util.Fonts'
    ],

    controller: 'user',

    viewModel: {
        type: 'user'
    },

    frame: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'users-grid',
            flex: 1
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    //glyph: Packt.util.Fonts.getGlyph('add'),
                    listeners: {
                        click: 'onAdd'
                    }
                }, {
                    xtype: 'button',
                    text: 'Edit',
                    //glyph: Packt.util.Fonts.getGlyph('edit'),
                    listeners: {
                        click: 'onEdit'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                }, {
                    xtype: 'button',
                    text: 'Delete',
                    //glyph: Packt.util.Fonts.getGlyph('destroy'),
                    listeners: {
                        click: 'onDelete'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                }
            ]
        }
    ]
});
