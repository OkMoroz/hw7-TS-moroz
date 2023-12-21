//1.  Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
//2.  Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
//3.  Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
//4.  Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
//5.  Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
//6.  Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

/*1.*/
interface IUnionInterface {
  [key: string]: number | string;
}

/*2.*/
interface IFunctionInterface {
  [key: string]: (...rest: any[]) => any;
}

/*3.*/
type myType = string | number;

interface IObjectInterface {
  [key: number]: myType;
}

/*4.*/
interface IDynamicProp {
  name: string;
  [key: string]: string | number | boolean;
}

/*5.*/
interface IBaseProp {
  [key: string]: string;
}

interface IExtendProp extends IBaseProperties {
  name: string;
  age: number;
}

/*6.*/
interface IObjectInterface {
  [key: string]: number;
}

function myValues(obj: IObjectInterface, keys: string[]): boolean {
  return keys.every((key) => typeof obj[key] === "number");
}
