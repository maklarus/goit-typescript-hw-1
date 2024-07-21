function showMessage(message: string): void {
 console.log(message);
}

function calc(num1: number, num2: number): number {
 return num1 + num2;
}

function customError(): never {
throw new Error('Error');
}
try {
  customError();                 
} catch (e) {
  console.log(e);           
}
showMessage('Hello');
console.log(calc(3, 7));
