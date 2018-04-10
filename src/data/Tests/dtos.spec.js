import { KitchenDto, MicrowaveDto, OvenDto } from '../dtos'


it('should contain a Microwave and a Oven', () => {
    const expectedMicrowave = new MicrowaveDto(false)
    const expectedOven = new OvenDto(false)
    const kitchenInstance = new KitchenDto(expectedMicrowave, expectedOven)
    expect(kitchenInstance).toBeDefined()
    expect(kitchenInstance.microwave).toEqual(expectedMicrowave)
    expect(kitchenInstance.oven).toEqual(expectedOven)
    expect(kitchenInstance.microwave.switchPower()).toBeTruthy()
    expect(kitchenInstance.oven.switchPower()).toBeTruthy()
})

it('should have light on', () => {
    const targetMicrowave = new MicrowaveDto(false)
    expect(targetMicrowave.light())

})

it('should be on fire', () => {
    const targetOven = new OvenDto(false)
    expect(targetOven.fire())
})

it('should have power', () => {
    const targetMicrowave = new MicrowaveDto(false)
    expect(targetMicrowave.switchPower())
})

it('should have power', () => {
    const targetOven = new OvenDto(false)
    expect(targetOven.switchPower())
})

