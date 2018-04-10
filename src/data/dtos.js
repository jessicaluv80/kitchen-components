class ApplianceDto {
    constructor(haspower, isonfire) {
        this.haspower = haspower
        this.isonfire = isonfire
    }
    switchPower() {
        this.haspower = !this.haspower
        return this.haspower
    }
}

class KitchenDto {
    constructor(microwave, oven) {
        this.microwave = microwave
        this.oven = oven
    }
}

class OvenDto extends ApplianceDto {
    fire() {
        this.isonfire = !this.isonfire
        return this.isonfire
    }
}

class MicrowaveDto extends ApplianceDto {
    light() {
        this.lightison = !this.lightison
        return this.lightison
    }
}

export { KitchenDto, MicrowaveDto, OvenDto }

