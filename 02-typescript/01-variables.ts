// 01-variables.ts
let nombre: string = 'Adrian';
// nombre = 1;
nombre = 'Vicente';
// Duck Typing
let edad: number = 31;
let casado: boolean = false;
let fecha = new Date();
let sueldo: number;
sueldo = 12.4;
let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';
let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';