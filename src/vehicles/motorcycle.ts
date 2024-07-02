import { Vehicle } from './vehicle.abstract';

export class Motorcycle extends Vehicle {
    start(): void {
        console.log("Motorcycle started.");
    }

    stop(): void {
        console.log("Motorcycle stopped.");
    }
}
