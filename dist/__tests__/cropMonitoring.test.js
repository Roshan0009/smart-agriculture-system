"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cropMonitoring_1 = require("../cropMonitoring/cropMonitoring");
test('monitor crop health', () => {
    console.log = jest.fn(); // Mock console.log
    (0, cropMonitoring_1.monitorCropHealth)();
    expect(console.log).toHaveBeenCalledWith('Monitoring crop health...');
});
