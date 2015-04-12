/**
 * Created by luis_blanco on 4/11/2015.
 */
Ext.define('Packt.view.security.UsersGrid', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.users-grid',

    reference: 'usersGrid',

    bind: '{users}',

    columns: [
        {
            width: 150,
            dataIndex: 'userName',
            text: 'UserName'
        }, {
            width: 200,
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        }, {
            width: 250,
            dataIndex: 'email',
            text: 'Email'
        }, {
            width: 150,
            dataIndex: 'groupId',
            text: 'Group'
        }
    ]
});