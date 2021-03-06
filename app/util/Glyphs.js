/**
 * Created by luis_blanco on 4/11/2015.
 */

Ext.define('Packt.util.Glyphs', {

    singleton: true,

    config: {
        webFont: 'FontAwesome',
        add: 'xf067',
        edit: 'xf040',
        destroy: 'xf1f8',
        save: 'xf00c',
        cancel: 'xf0e2'
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    getGlyph: function (glyph) {

        debugger;

        var me = this,
            font = me.getWebFont();

        if (typeof me.config[glyph] === 'undefined') {
            return false;
        }

        return me.config[glyph] + '@' + font;
    }
});