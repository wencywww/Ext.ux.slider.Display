Ext.onReady(function () {

    /*
     * A container with Ext.slider.Single and accompanying Ext.form.field.Display / Ext.form.field.Number to visualize slider's value
     * Can be instantiated via the displayslider xtype.
     * Appropriate for any place where the actual slider value must be visible to the user.
     * If the visualizing field is numberfield, it is 2-way bound and the slider can ce manipulated trough it
     *
     * Available configs (all are optional and will be set to defaults if not provided):
     * @param {Object} sliderConfig - used to configure the slider, accepts options for Ext.slider.Single, defaults to {flex: 1, minValue: 0, maxValue: 100, value: 50, publishOnComplete: false, bind: '{slidervalue}'}
     * @param {Object} displayFieldConfig - used to configure the visualizing component, accepts options for Ext.form.field.Display / Ext.form.field.Number, defaults to {xtype: 'displayfield', placeInFront: false, flex: .2, hideLabel: true, submitValue: false, bind: '{slidervalue}' + me.suffixConfig.text}
     * @param {Object} suffixConfig - used to configure the suffix properties {text: '', flex: .2}
     *
     * Example Sencha fiddle available at:
     * https://fiddle.sencha.com/#fiddle/2o24
     * */

    Ext.define('Ext.ux.slider.Display', {
        extend: 'Ext.container.Container',
        alias: 'widget.displayslider',

        layout: {
            type: 'hbox'
        },

        suffixConfig: {
            text: '',
            flex: .2
        },

        initComponent: function () {
            var me = this;
            me.callParent(arguments);

            me.sliderDefaults = {
                flex: 1,
                minValue: 0,
                maxValue: 100,
                value: 50,
                publishOnComplete: false,
                bind: '{slidervalue}'
            };

            me.displayFieldDefaults = {
                xtype: 'displayfield',
                placeInFront: false,
                flex: .2,
                hideLabel: true,
                //fieldStyle: 'text-align: right',
                submitValue: false,
                bind: '{slidervalue}' + me.suffixConfig.text
            };

            me.setViewModel({
                data: {
                    slidervalue: me.sliderConfig && me.sliderConfig.value ? me.sliderConfig.value : me.sliderDefaults.value
                }
            });

            var slider = me.createSlider();
            var displayField = me.createDisplayField();

            me.add(displayField.placeInFront ? [displayField, slider] : [slider, displayField]);

            if (displayField.xtype == 'numberfield' && me.suffixConfig.text && me.suffixConfig.text.length) {
                var suffixField = Ext.widget('displayfield', Ext.merge({
                    hideLabel: true,
                    value: me.suffixConfig.text
                }, me.suffixConfig));
                if (displayField.placeInFront) {
                    me.insert(1, suffixField);
                } else {
                    me.add(suffixField);
                }

            }

        },
        createSlider: function () {
            var me = this;
            var sliderConfig = me.sliderConfig ? Ext.merge(me.sliderDefaults, me.sliderConfig) : me.sliderDefaults;
            var slider = Ext.widget('sliderfield', sliderConfig);
            return slider;
        },

        createDisplayField: function () {
            var me = this;
            var displayFieldConfig = me.displayFieldConfig ? Ext.merge(me.displayFieldDefaults, me.displayFieldConfig) : me.displayFieldDefaults;

            if (displayFieldConfig.xtype != 'displayfield' && displayFieldConfig.xtype != 'numberfield') {
                displayFieldConfig.xtype = 'displayfield';
            }

            if (displayFieldConfig.xtype == 'numberfield') {
                displayFieldConfig.bind = '{slidervalue}';
            }

            var displayField = Ext.widget(displayFieldConfig.xtype, displayFieldConfig);
            return displayField;
        }

    });
});
