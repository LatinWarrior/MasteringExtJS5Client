/**
 * Created by luis_blanco on 4/4/2015.
 */
Ext.define('Packt.view.main.Footer',{
    extend: 'Ext.container.Container',
    xtype: 'appfooter',
    cls: 'app-footer',
    height: 30,
    items: [{
        xtype: 'component',
        width: 350,
        componentCls: 'app-footer-title',
        bind:{
            html: '{footer}'
        }
    }]
});