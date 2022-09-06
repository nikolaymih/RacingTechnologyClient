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

export type ShopProductsCategories = {
    [key: string]: {
        id: number,
        name: string,
        image: string
    }
}

export const shopProductsCategories: ShopProductsCategories = {
    filters: {
        id: 1,
        name: 'Filters',
        image: filters
    },
    brakingSystem: {
        id: 2,
        name: 'Braking system',
        image: brakingSystem
    },
    transmission: {
        id: 3,
        name: 'Transmission',
        image: transmission
    },
    suspension: {
        id: 4,
        name: 'Suspension',
        image: suspension
    },
    steeringSystem: {
        id: 5,
        name: 'Steering system',
        image: steeringSystem
    },
    clutchAndFlywheel: {
        id: 6,
        name: 'Clutch and flywheel',
        image: clutchAndFlywheel
    },
    beltDrive: {
        id: 7,
        name: 'Belt drive',
        image: beltDrive
    },
    gear: {
        id: 8,
        name: 'Gear',
        image: gear
    },
    coolingSystem: {
        id: 9,
        name: 'Cooling system',
        image: coolingSystem
    },
    ignitionSystem: {
        id: 10,
        name: 'Ignition system',
        image: ignitionSystem
    },
    fuelFilter: {
        id: 11,
        name: 'Fuel Filter',
        image: fuelFilter
    },
    GasketsAndSeals: {
        id: 12,
        name: 'Gaskets and seals',
        image: GasketsAndSeals
    },
}