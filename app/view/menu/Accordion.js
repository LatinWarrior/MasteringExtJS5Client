/**
 * Created by luis_blanco on 4/6/2015.
 */
Ext.define('Packt.view.menu.Accordion', {

    extend: 'Ext.panel.Panel',

    xtype: 'mainmenu',

    width: 250,

    layout: {
        type: 'accordion',
        multi: true
    },

    collapsible: true,

    split: true,

    iconCls: 'fa fa-sitemap fa-lg',

    title: translations.menu
});