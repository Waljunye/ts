import * as React from "react";
// 1 - Работа с простыми типами

type concatFunctionType = (left: string | number | any[], right: string | number | any[]) => string | any[]

function concatStrings(left, right): concatFunctionType {
    return left + right
}


// 2 - Работа с интерфейсами
interface IHomeTask {
    howIDoIt: string,
    simeArray: Array<string | number>,
    withData(): object[]
}

// 3 - Типизация функций, используя Generic

interface IMyArray<T> {
    [N: number]: T,

    reduce(fn : (ac: T, val: T) => T, inVal?: number): T
    reduce(fn : (ac: T, val: T) => T): T
}

const myArray : IMyArray<number> = [1, 2 ,3]

console.log(myArray.reduce((accumulator, value) => accumulator + value))

// 4 - Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [P in keyof T]?: T[P] extends object ? MyPartial<T[P]>: T[P]
}

const myPartial: MyPartial<IHomeTask> = {
    data: "КРАСИВО!!!"
}
console.log(myPartial.data)

// 5 - Это мои попытки сделать усложнённые задания

function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}