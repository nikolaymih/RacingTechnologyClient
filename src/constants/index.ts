import filters from '../assets/images/filters.webp';
import brakingSystem from '../assets/images/Braking system.webp';
import transmission from '../assets/images/Transmission.jpg';
import suspension from '../assets/images/suspension.webp';
import steeringSystem from '../assets/images/Steering system.jpg';
import clutchAndFlywheel from '../assets/images/Clutch and flywheel.jpg';
import beltDrive from '../assets/images/Belt drive.webp';
import gear from '../assets/images/Gear.jpg';
import coolingSystem from '../assets/images/Cooling system.jpg';
import ignitionSystem from '../assets/images/Ignition system.jpg';
import fuelFilter from '../assets/images/Fuel Filter.jpg';
import GasketsAndSeals from '../assets/images/GasketsAndSeals.jpg';

import audi from '../assets/images/car-models/audi.jpg';
import bmw from '../assets/images/car-models/bmw.png';
import mercedes from '../assets/images/car-models/mercedes.jpg';
import alfaRomeo from '../assets/images/car-models/alfa-romeo.png';
import opel from '../assets/images/car-models/opel.png';
import citroen from '../assets/images/car-models/citroen.png';
import renault from '../assets/images/car-models/renault.svg';
import peugeot from '../assets/images/car-models/peugeot.png';
import dacia from '../assets/images/car-models/dacia.jpg';
import seat from '../assets/images/car-models/seat.png';
import skoda from '../assets/images/car-models/skoda.png';
import toyota from '../assets/images/car-models/toyota.png';

export type ShopProductsCategories = {
    [key: string]: {
        id: number,
        name: string,
        image: string
    }
}

export const shopCarModels: ShopProductsCategories = {
    audi: {
        id: 1,
        name: 'Parts Audi',
        image: audi
    },
    bmw: {
        id: 2,
        name: 'Parts BMW',
        image: bmw
    },
    mercedes: {
        id: 3,
        name: 'Parts Mercedes-Benz',
        image: mercedes
    },
    alfaRomeo: {
        id: 4,
        name: 'Parts Alfa Romeo',
        image: alfaRomeo
    },
    opel: {
        id: 5,
        name: 'Parts Opel',
        image: opel
    },
    citroen: {
        id: 6,
        name: 'Parts Citroen',
        image: citroen
    },
    renault: {
        id: 7,
        name: 'Parts Renault',
        image: renault
    },
    peugeot: {
        id: 8,
        name: 'Parts Peugeot',
        image: peugeot
    },
    dacia: {
        id: 9,
        name: 'Parts Dacia',
        image: dacia
    },
    seat: {
        id: 10,
        name: 'Parts Seat',
        image: seat
    },
    skoda: {
        id: 11,
        name: 'Parts Skoda',
        image: skoda
    },
    toyota: {
        id: 12,
        name: 'Parts Toyota',
        image: toyota
    },
}

// export const shopProductsCategories: ShopProductsCategories = {
//     filters: {
//         id: 1,
//         name: 'Filters',
//         image: filters
//     },
//     brakingSystem: {
//         id: 2,
//         name: 'Braking system',
//         image: brakingSystem
//     },
//     transmission: {
//         id: 3,
//         name: 'Transmission',
//         image: transmission
//     },
//     suspension: {
//         id: 4,
//         name: 'Suspension',
//         image: suspension
//     },
//     steeringSystem: {
//         id: 5,
//         name: 'Steering system',
//         image: steeringSystem
//     },
//     clutchAndFlywheel: {
//         id: 6,
//         name: 'Clutch and flywheel',
//         image: clutchAndFlywheel
//     },
//     beltDrive: {
//         id: 7,
//         name: 'Belt drive',
//         image: beltDrive
//     },
//     gear: {
//         id: 8,
//         name: 'Gear',
//         image: gear
//     },
//     coolingSystem: {
//         id: 9,
//         name: 'Cooling system',
//         image: coolingSystem
//     },
//     ignitionSystem: {
//         id: 10,
//         name: 'Ignition system',
//         image: ignitionSystem
//     },
//     fuelFilter: {
//         id: 11,
//         name: 'Fuel Filter',
//         image: fuelFilter
//     },
//     GasketsAndSeals: {
//         id: 12,
//         name: 'Gaskets and seals',
//         image: GasketsAndSeals
//     },
// }