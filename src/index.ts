// src/index.ts

import { monitorCropHealth } from './cropMonitoring/cropMonitoring';
import { manageIrrigation } from './irrigation/irrigation';
import { controlClimate } from './climateControl/climateControl';


const crop = "Tomato"; // Specify the crop

console.log("Hello, Smart Agriculture!");
monitorCropHealth(); // Call the crop monitoring function
manageIrrigation(crop);   // Call the irrigation management function
controlClimate();          // Call the climate control function
