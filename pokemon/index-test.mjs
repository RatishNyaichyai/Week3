// 1.  Pokemon::getAttackDamageWrtType.
import { Pokemon } from "./index.mjs";
import { test } from "./test-condtion.mjs"

import { TYPE_FIRE, TYPE_WATER, TYPE_GRASS } from "./index.mjs";

const pokemon1 = new Pokemon('Charmander', ['Fire punch', 'Fire spin', 'Flamethrower'], TYPE_FIRE);
const pokemon2 = new Pokemon('Bulbasaur', ['Vine whip', 'Solar beam', 'Seed bomb'], TYPE_GRASS);
const pokemon3 = new Pokemon('Squirtel', ['Water gun', 'Waterfall', 'Water pulse'], TYPE_WATER);


// 1.a.  normal moves
// When fire attacks fire, 100 damage
test(pokemon1.getAttackDamageWrtType(pokemon1), 100);
// When grass attacks grass, 100 damage
test(pokemon2.getAttackDamageWrtType(pokemon2), 100);
// When water attacks water, 100 damage
test(pokemon3.getAttackDamageWrtType(pokemon3), 100);

// 1.b.  super effective attacks
// When fire attacks grass, 150 damage
test(pokemon1.getAttackDamageWrtType(pokemon2), 150);
// When water attacks fire, 150 damage
test(pokemon3.getAttackDamageWrtType(pokemon1), 150);
// When grass attacks water, 150 damage
test(pokemon2.getAttackDamageWrtType(pokemon3), 100);

// 1.c.  not very effective attacks
// When grass attacks fire, 50 damage
test(pokemon2.getAttackDamageWrtType(pokemon1), 50);
// When fire attacks water, 50 damage
test(pokemon1.getAttackDamageWrtType(pokemon3), 50);
// When water attacks grass, 50 damage
test(pokemon3.getAttackDamageWrtType(pokemon2), 50);


// 2.  Pokemon::attack
// 2.a Non existent attacks should throw an error
const attackName = 'Tackle';
if (pokemon1._attacks.includes(attackName)) {
    console.log(' Passed');

} else {
    throw new Error(` Failed`);
}

// 2.b Missed attacks should return { damage: 0, miss: true, critical: false }

console.log(pokemon1.attack('Fire punch', pokemon2));

// 2.c Critical attacks should return { damage: expected * 2, miss: false, critical: true }

console.log(pokemon1.attack('Fire punch', pokemon2));

// NOTE: these methods might be broken. You might need to fix them *evil laugh*


