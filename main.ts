import { Car } from './vehicles/car';
import { Motorcycle } from './vehicles/motorcycle';
import { UsersService } from './users/users.service';
import { MongoDB } from './database/mongodb.service';
import { SQLDB } from './database/sqldb.service';


const car = new Car();
car.start();
car.stop();

const motorcycle = new Motorcycle();
motorcycle.start();
motorcycle.stop();


const usersService = new UsersService<{ name: string, age: number }>();
usersService.create({ name: 'Ali', age: 30 });
console.log(usersService.read());
usersService.update(0, { name: 'Vali', age: 25 });
console.log(usersService.read());
usersService.delete(0);
console.log(usersService.read());

const mongoDb = new MongoDB<any>();
mongoDb.connect();
mongoDb.create({ name: 'Ali', age: 30 });
console.log(mongoDb.read());
mongoDb.update(0, { name: 'Vali', age: 25 });
console.log(mongoDb.read());
mongoDb.delete(0);
console.log(mongoDb.read());
mongoDb.disconnect();

const sqlDb = new SQLDB<any>();
sqlDb.connect();
sqlDb.create({ name: 'Hasan', age: 40 });
console.log(sqlDb.read());
sqlDb.update(0, { name: 'Husan', age: 35 });
console.log(sqlDb.read());
sqlDb.delete(0);
console.log(sqlDb.read());
sqlDb.disconnect();
