export interface CRUD<T> {
    create(item: T): void;
    read(): T[];
    update(id: number, item: T): void;
    delete(id: number): void;
}
