/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Packt.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Packt',
        appName: 'DVD Rental Store',
        appHeaderIcon: '<span class="fa fa-desktop fa-lg appheader-logo">',
        footer: 'Mastering ExtJS 5 book'
    }

    //TODO - add data, formulas and/or methods to support your view
});