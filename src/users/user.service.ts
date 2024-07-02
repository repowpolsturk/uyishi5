import { CRUD } from './crud.interface';

export class UsersService<T> implements CRUD<T> {
    private userList: T[] = [];

    create(item: T): void {
        this.userList.push(item);
    }

    read(): T[] {
        return this.userList;
    }

    update(id: number, item: T): void {
        this.userList[id] = item;
    }

    delete(id: number): void {
        this.userList.splice(id, 1);
    }
}
