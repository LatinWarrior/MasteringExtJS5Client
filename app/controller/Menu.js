/**
 * Created by luis_blanco on 4/6/2015.
 */
Ext.define('Packt.controller.Menu', {
    extend: 'Ext.app.Controller',
    init: function (application) {
        var me = this;
        me.control({
            'menutree': {
                itemClick: me.onTreePanelItemClick
            },
            'mainmenu': {
                render: me.renderDynamicMenu
            }
        });
    },
    renderDynamicMenu: function (view, options) {
        console.log('menu rendered.');
    },
    onTreePanelItemClick: function(view, record, item, index, event, options){
        console.log('Tree Panel Item Clicked.')
    }
});