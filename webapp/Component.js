sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/tasa/mareaevento/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.tasa.mareaevento.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();              

                // set detalle marea model
                this.setModel(models.createInitModel(), "DetalleMarea");

                // set plantas model
			    this.setModel(models.createPlantasModel(), "PlantasModel");

			    // set propios model
			    this.setModel(models.ListaMareas(), "ListaMareas");

                //set constants utilitis model
			    this.setModel(models.createConstantsUtility(), "ConstantsUtility");


            }
        });
    }
);