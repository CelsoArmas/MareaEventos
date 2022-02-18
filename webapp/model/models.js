sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createInitModel: function(){
            var dataModel = {};
            var oModel = new JSONModel(dataModel);
			//oModel.setDefaultBindingMode("OneWay");
			return oModel; 
        },

        createPlantasModel: function(){
            var data = {};
            var oModel = new JSONModel(data);
			return oModel;
        },

        ListaMareas: function(){
            var data = {};
            var oModel = new JSONModel(data);
			return oModel;
        },

        createConstantsUtility: function(){
            var data = {};
            var oModel = new JSONModel(data);
			return oModel;
        },




    };
});