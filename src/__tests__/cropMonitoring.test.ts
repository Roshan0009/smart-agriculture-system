import { monitorCropHealth } from '../cropMonitoring/cropMonitoring';

test('monitor crop health', () => {
    console.log = jest.fn(); // Mock console.log
    monitorCropHealth();
    expect(console.log).toHaveBeenCalledWith('Monitoring crop health...');
});
