import Chance from 'chance';
import {addMixins} from './addMixins';
import {getSeed} from './get-seed';

const seed = getSeed();
console.log(`Chance Seed = ${seed}`); // eslint-disable-line no-console

const chance = new Chance(seed);
addMixins(chance);

export default chance;