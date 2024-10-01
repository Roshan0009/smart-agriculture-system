"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const cropMonitoring_1 = require("./cropMonitoring/cropMonitoring");
const irrigation_1 = require("./irrigation/irrigation");
const climateControl_1 = require("./climateControl/climateControl");
const crop = "Tomato"; // Specify the crop
console.log("Hello, Smart Agriculture!");
(0, cropMonitoring_1.monitorCropHealth)(); // Call the crop monitoring function
(0, irrigation_1.manageIrrigation)(crop); // Call the irrigation management function
(0, climateControl_1.controlClimate)(); // Call the climate control function
