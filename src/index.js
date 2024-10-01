"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cropMonitoring_1 = require("./cropMonitoring/cropMonitoring");
const irrigation_1 = require("./irrigation/irrigation");
console.log("Hello, Smart Agriculture!");
(0, cropMonitoring_1.monitorCropHealth)("Tomato");
(0, irrigation_1.startIrrigation)();
