// namespace Geometria{
//     export namespace Areas{
//         const PI : number = 3.14
//
//         export function areaCircunferencia(raio : number) : number {
//             return PI * Math.pow(raio, 2)
//         }
//
//         export function areaRetangulo(base : number, altura: number) : number {
//             return base * altura
//         }
//     }
// }

///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRet.ts"/>

console.log(Geometria.Areas.areaCircunferencia(10) )
console.log(Geometria.Areas.areaRetangulo(10,20))