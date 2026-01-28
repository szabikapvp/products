import {expect, it} from "vitest"
import { calculateTotal } from "./script"

const cart1 = [
    { termek: "alma", egysegar: 100, mennyiseg: 1 },
    { termek: "tv", egysegar: 1000, mennyiseg: 1 }
];//1000

const cart2 = [
    { termek: "evőeszköz", egysegar: 15000, mennyiseg: 1 },
    { termek: "tányér", egysegar: 15000, mennyiseg: 2 }
];//42000

const cart3 = [
    { termek: "alma", egysegar: 35, mennyiseg: 8 },
    { termek: "tej", egysegar: 715, mennyiseg: 2 },
    { termek: "evőeszköz készlet", egysegar: 15000, mennyiseg: 1 },
    { termek: "tányér készlet", egysegar: 15000, mennyiseg: 2 }
];//43710

const cart = [
    { termek: "alma", egysegar: 35, mennyiseg: 8 },
    { termek: "tej", egysegar: 715, mennyiseg: 2 },
    { termek: "evőeszköz készlet", egysegar: 15000, mennyiseg: 2 },
    { termek: "tányér készlet", egysegar: 15000, mennyiseg: 2 }
];//58680

it("1db legdrágább",() => expect(calculateTotal(cart1)).toBe(1000));
it("2 ugyanolyan drága, nagyobb mennyiség kap akciót",() => expect(calculateTotal(cart2)).toBe(42000));
it("2 ugyanolyan drága, nagyobb mennyiség kap akciót",() => expect(calculateTotal(cart3)).toBe(43710));
it("2 ugyanolyan drága, ugyanakkora mennyiség",() => expect(calculateTotal(cart)).toBe(58710));

