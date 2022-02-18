/*global QUnit*/

sap.ui.define([
	"comtasa./mareaevento/controller/Marea.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Marea Controller");

	QUnit.test("I should test the Marea controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
