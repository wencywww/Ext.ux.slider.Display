
Sencha ExtJS Slider with value visualization
-------------------------------------


**Source at GitHub**

[https://github.com/wencywww/Ext.ux.slider.Display](https://github.com/wencywww/Ext.ux.slider.Display)



**Demos**

[Sencha's Fiddle: https://fiddle.sencha.com/#fiddle/2o24](https://fiddle.sencha.com/#fiddle/2o24)




**Features:**

  * Sencha ExtJS has nice sliderfield component, but sometimes the user may want to see the actual value of the slider next to it. 
  * Registers the 'displayslider' xtype
  * Uses a standard container component which contains a slider and a displayfield/numberfield for the visualization.
  * A displayfield is used by default, but numberfield could also be used and it is 2-way bound to the slider
  * If numberfield is used, it is not submitted by default
  * Alows optional suffix to be displayed next to the value
  * Alows the displayfield to be placed in front (or top) of the slider
  * Supports vertical orientation
  * Configuration options are available for each of the container, slider and displayfield/numberfield, which allows for flexibility  
  * Tested with ExtJS version 5.0.0.736 and up to 6.6.0 


**Configuration options**

  * All configs are optional, defaults are applied if not provided
  * For the container itself, a 'hbox' layout is applied by default. If vertical orientation is needed, use 'vbox' and 'vertical: true' within the 'sliderConfig'
  * **sliderConfig** (object) - configurations for the Slider, see the docs for 
  [Ext.slider.Single](https://docs.sencha.com/extjs/6.2.0/classic/Ext.slider.Single.html)
    * default is: 
    ```json
    {
        flex: 1,
        minValue: 0,
        maxValue: 100,
        value: 50,
        publishOnComplete: false,
        bind: '{slidervalue}'
    }
    
  * **displayFieldConfig** (object) - configurations for the display field, may accept options for either 
  [Ext.form.field.Display](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Display.html) or 
  [Ext.form.field.Number](https://docs.sencha.com/extjs/6.2.0/classic/Ext.form.field.Number.html). 
  **placeInFront** can used to control the position of the displayfield
    * default is: 
    ```json
    {
        xtype: 'displayfield',
        placeInFront: false, //if true, the displayfield will be shown before/on top of the slider
        flex: .2,
        hideLabel: true,
        submitValue: false,
        bind: '{slidervalue}' + me.suffixConfig.text
    }
      
  * **suffixConfig** (object) - provides the suffix text via the 'text' property. In case the displayfieldConfig 
  is configured with a 'numberfield' xtype, then the suffix is shown as an additional displayfield after the numberfield 
  and can be further configured via this object 
      * default is: 
    ```json
    {
      text: '', 
      flex: .2
    }
  
  
**Usage**

  * Include the `src/displaySlider.js` file (Ext must be included prior to this)
  * Instantiate the class, for example `var displaySlider = Ext.create('Ext.ux.slider.Display')`, or using the 'displayslider' xtype
  

**List of Changes**

  * **2018-12-06**, initial commit
