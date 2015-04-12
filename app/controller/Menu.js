/**
 * Created by luis_blanco on 4/6/2015.
 */
Ext.define('Packt.controller.Menu', {

    extend: 'Ext.app.Controller',

    stores: [
        'Menu'
    ],

    requires: [
        'Packt.view.menu.Tree',
        'Packt.view.security.User'
    ],

    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        }
    ],

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

        var dynamicMenus = [];

        view.body.mask('Loading menus... Please wait...');

        this.getMenuStore().load(function (records, op, success) {

            console.log(this);

            debugger;

            Ext.each(records, function (root) {

                var menu = Ext.create('Packt.view.menu.Tree', {
                    title: translations[root.get['text']],
                    iconCls: root.get('iconCls')
                });

                var treeNodeStore = root.items(),
                    nodes = [],
                    item;

                for (var i = 0; i < treeNodeStore.getCount(); i++) {
                    item = treeNodeStore.getAt(i);

                    nodes.push({
                        text: translations[item.get('text')],
                        leaf: true,
                        glyph: item.get('iconsCls'),
                        id: item.get('id'),
                        className: item.get('className')
                    });
                }

                menu.getRootNode().appendChild(nodes);
                dynamicMenus.push(menu)
            });

            view.add(dynamicMenus);
            view.body.unmask();
        });

    },
    onTreePanelItemClick: function (view, record, item, index, event, options) {
        console.log('Tree Panel Item Clicked.');

        var me = this;

        var mainPanel = me.getMainPanel();

        debugger;

        var newTab = mainPanel.items.findBy(
            function (tab) {
                return tab.title === record.get('text');
            }
        );

        if (!newTab) {
            newTab = mainPanel.add({
                xtype: record.get('className'),
                closable: true,
                glyph: record.get('glyph'),
                title: record.get('text')
            });
        }

        mainPanel.setActiveTab(newTab);
    }
});