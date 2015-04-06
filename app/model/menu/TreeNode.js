/**
 * Created by luis_blanco on 4/5/2015.
 */
Ext.define('Packt.model.menu.TreeNode', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'text'
        }, {
            name: 'iconCls'
        }, {
            name: 'className'
        }, {
            name: 'parentId',
            mapping: 'menuId'
        }
    ]
});