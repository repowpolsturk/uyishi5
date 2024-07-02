import { Database } from './database.abstract';

export class MongoDB<T> extends Database<T> {
    private items: T[] = [];

    connect(): void {
        console.log('Connected to MongoDB');
    }

    disconnect(): void {
        console.log('Disconnected from MongoDB');
    }

    create(item: T): void {
        this.items.push(item);
    }

    read(): T[] {
        return this.items;
    }

    update(id: number, item: T): void {
        this.items[id] = item;
    }

    delete(id: number): void {
        this.items.splice(id, 1);
    }
}
