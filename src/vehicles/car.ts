import { Vehicle } from './vehicle.abstract';

export class Car extends Vehicle {
    start(): void {
        console.log("Car started.");
    }

    stop(): void {
        console.log("Car stopped.");
    }
}
