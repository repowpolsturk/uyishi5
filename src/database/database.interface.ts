export abstract class Database<T> {
    abstract connect(): void;
    abstract disconnect(): void;
    abstract create(item: T): void;
    abstract read(): T[];
    abstract update(id: number, item: T): void;
    abstract delete(id: number): void;
}
