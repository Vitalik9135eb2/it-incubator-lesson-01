import React, {useState} from "react";
import {Btn} from "./Btn";

type MoneyType = {
    banknots: string
    value: number
    number: string
}

export const BtnTask = () => {
    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<any>("all")

    const btnFun = (name: string, arge?: number) => {
        console.log(name, arge)
    }

    const btnMoney = (m: string) => {
        setFilter(m)
    }

    let filterMoney = money

    if (filter === "usd") {
        filterMoney = money.filter(el => el.banknots === "Dollars")
    }

    if (filter === "rub") {
        filterMoney = money.filter(el => el.banknots === "RUBLS")
    }


    const listMoney = filterMoney.map(item => (

        <div key={Math.random()}>
            <span>{item.banknots}</span>
            <span>{item.value}</span>
            <span>{item.number}</span>
        </div>
    ))

    return (
        <div>


            <Btn name={"btn 1"} callBack={() => btnFun("Ivan", 29)}/>
            <Btn name={"btn 2"} callBack={() => btnFun("Samuel", 77)}/>
            <Btn name={"btn 3"} callBack={() => btnFun("I am stupid btn")}/>


            <div>
                {listMoney}

                <Btn name={"USD"} callBack={() => btnMoney("usd")}/>
                <Btn name={"RUB"} callBack={() => btnMoney("rub")}/>
                <Btn name={"All"} callBack={() => btnMoney("all")}/>

            </div>

        </div>
    )
}