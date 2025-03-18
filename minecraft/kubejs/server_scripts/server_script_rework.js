// Code is AI assisted but not fully generated

// Tags
ServerEvents.tags('item', event => {

// event.add(
//   'tagToAddTo', 
  
//   'taggedItem1', 
//   'taggedItem2'
// )
  
event.add(
  'kubejs:limestone', 
  
  'create:limestone', 
  'alexscaves:limestone'
)

})

// Constants and Configuration
ServerEvents.recipes(event => {
const dyeRegistry = {
// For referencing the dyes easier later on

  // Minecraft dyes
  // Note: DyeRegistry.minecraft.ash and DyeRegistry.minecraft.sky are named differently as to be simpler and to conform to the built-in Dye Override resource pack added by Dye Depot
  minecraft: {
    white: 'minecraft:white_dye',
    ash: 'minecraft:light_gray_dye', 
    gray: 'minecraft:gray_dye',
    black: 'minecraft:black_dye',
    brown: 'minecraft:brown_dye',
    red: 'minecraft:red_dye',
    orange: 'minecraft:orange_dye',
    yellow: 'minecraft:yellow_dye',
    lime: 'minecraft:lime_dye',
    green: 'minecraft:green_dye',
    cyan: 'minecraft:cyan_dye',
    sky: 'minecraft:light_blue_dye',
    blue: 'minecraft:blue_dye',
    purple: 'minecraft:purple_dye',
    magenta: 'minecraft:magenta_dye',
    pink: 'minecraft:pink_dye',
  },

  // Dye Depot dyes
  dyeDepot: {
    rose: 'dye_depot:rose_dye',
    maroon: 'dye_depot:maroon_dye',
    coral: 'dye_depot:coral_dye',
    ginger: 'dye_depot:ginger_dye',
    tan: 'dye_depot:tan_dye',
    beige: 'dye_depot:beige_dye',
    amber: 'dye_depot:amber_dye',
    olive: 'dye_depot:olive_dye',
    forest: 'dye_depot:forest_dye',
    verdant: 'dye_depot:verdant_dye',
    teal: 'dye_depot:teal_dye',
    mint: 'dye_depot:mint_dye',
    aqua: 'dye_depot:aqua_dye',
    slate: 'dye_depot:slate_dye',
    navy: 'dye_depot:navy_dye',
    indigo: 'dye_depot:indigo_dye',
  }
};

const mods = {
  // Not particularly "sensical" but it's simpler in the long run
  mc: 'minecraft:',
  cr: 'create:',
  // Short for "Create Addons" 
  crA: { 
    ei: 'create_enchantment_industry:',
    es: 'estrogen:'
  },
  fd: 'farmersdelight:',
  // Short for "Farmer's Delight Addons"
  fdA: {
    cd: 'corn_delight:',
    de: 'delightful:',
  },
  kjs: 'kubejs:',
  bwg: 'biomeswevegone:',
  bb: 'buzzierbees:',
  am: 'alexs_mobs:',
  ac: 'alexscaves:',
  su: 'supplementaries:',
  oe: 'outer_end:',
  
};
function getItem(quantity, baseItem) {
  return `${quantity}x ${baseItem}`;
}



// Recipes

// Dye Stuff
{
  let flower = 'dandelion'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    dyeRegistry.minecraft.yellow,
    Item.of(dyeRegistry.minecraft.yellow).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'poppy'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.red),
    Item.of(dyeRegistry.dyeDepot.maroon).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'blue_orchid'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.sky),
    Item.of(dyeRegistry.dyeDepot.aqua).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'allium'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.magenta),
    Item.of(dyeRegistry.minecraft.purple).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'azure_bluet'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.ash),
    Item.of(dyeRegistry.dyeDepot.beige).withChance(0.25),
    Item.of(dyeRegistry.minecraft.white).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'red_tulip'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.red),
    Item.of(dyeRegistry.minecraft.lime).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'orange_tulip'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.orange),
    Item.of(dyeRegistry.minecraft.lime).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.ginger).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.tan).withChance(0.05)
  ], `${mod}${flower}`)
}

{
  let flower = 'white_tulip'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.white),
    Item.of(dyeRegistry.minecraft.lime).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.slate).withChance(0.05)
  ], `${mod}${flower}`)
}

{
  let flower = 'pink_tulip'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.pink),
    Item.of(dyeRegistry.minecraft.lime).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.coral).withChance(0.1)
  ], `${mod}${flower}`)
}

{
  let flower = 'oxeye_daisy'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.white),
    Item.of(dyeRegistry.minecraft.yellow).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.beige).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'cornflower'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.blue),
    Item.of(dyeRegistry.dyeDepot.navy).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.indigo).withChance(0.1)
  ], `${mod}${flower}`)
}

{
  let flower = 'lily_of_the_valley'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.white),
    Item.of(dyeRegistry.minecraft.white).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'torchflower'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    Item.of(dyeRegistry.dyeDepot.maroon).withChance(0.25),
    Item.of(dyeRegistry.minecraft.yellow).withChance(0.25),
    Item.of(dyeRegistry.minecraft.purple).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.indigo).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.teal).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'wither_rose'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.black),
    Item.of(dyeRegistry.minecraft.green).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'pink_petals'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(1, dyeRegistry.minecraft.pink),
    Item.of(dyeRegistry.minecraft.pink).withChance(0.5),
    Item.of(dyeRegistry.dyeDepot.rose).withChance(0.05)
  ], `${mod}${flower}`)
}

{
  let flower = 'sunflower'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.yellow),
    Item.of(getItem(2, dyeRegistry.minecraft.yellow)).withChance(0.50),
    Item.of(dyeRegistry.dyeDepot.amber).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'lilac'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.magenta),
    Item.of(getItem(2, dyeRegistry.minecraft.magenta)).withChance(0.50),
    Item.of(dyeRegistry.minecraft.purple).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'rose_bush'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.dyeDepot.rose),
    Item.of(getItem(2, dyeRegistry.dyeDepot.rose)).withChance(0.50),
    Item.of(dyeRegistry.dyeDepot.maroon).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'peony'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.pink),
    Item.of(getItem(2, dyeRegistry.minecraft.pink)).withChance(0.50),
    Item.of(dyeRegistry.dyeDepot.verdant).withChance(0.1)
  ], `${mod}${flower}`)
}

{
  let flower = 'pitcher_plant'
  let mod = mods.mc
  event.remove({ id: `create:milling/${flower}` })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.minecraft.sky),
    Item.of(dyeRegistry.dyeDepot.slate).withChance(0.25),
    Item.of(dyeRegistry.minecraft.purple).withChance(0.1)
  ], `${mod}${flower}`)
}

{
  let flower = 'acacia_blossom'
  let mod = mods.am
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.dyeDepot.beige),
    Item.of(dyeRegistry.minecraft.ash).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_salmonberries'
  let mod = mods.fdA.de
  event.recipes.create.crushing([
    dyeRegistry.minecraft.orange,
    getItem(2, 'delightful:salmonberry_pips'),
    Item.of(dyeRegistry.dyeDepot.amber).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_cabbages'
  let mod = mods.fd
  event.remove({ id: 'farmersdelight:integration/create/milling/wild_cabbages' })
  event.recipes.create.crushing([
    dyeRegistry.dyeDepot.beige,
    ('2x farmersdelight:cabbage_seeds'),
    Item.of(dyeRegistry.minecraft.yellow).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.forest).withChance(0.25)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_onions'
  let mod = mods.fd
  event.remove({ id: 'farmersdelight:integration/create/milling/wild_onions' })
  event.recipes.create.crushing([
    (getItem(2, dyeRegistry.minecraft.magenta)),
    Item.of(dyeRegistry.minecraft.magenta).withChance(0.25),
    dyeRegistry.dyeDepot.forest,
    Item.of(dyeRegistry.dyeDepot.forest).withChance(0.5)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_tomatoes'
  let mod = mods.fd
  event.remove({ id: 'farmersdelight:integration/create/milling/wild_tomatoes' })
  event.recipes.create.crushing([
    (getItem(2, 'farmersdelight:tomato_seeds')),
    dyeRegistry.minecraft.red,
    Item.of(dyeRegistry.minecraft.green).withChance(0.5)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_carrots'
  let mod = mods.fd
  event.remove({ id: 'farmersdelight:integration/create/milling/wild_carrots' })
  event.recipes.create.crushing([
    dyeRegistry.dyeDepot.beige,
    dyeRegistry.minecraft.ash,
    Item.of(dyeRegistry.minecraft.pink).withChance(0.25),
    Item.of(dyeRegistry.dyeDepot.forest).withChance(0.1)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_potatoes'
  let mod = mods.fd
  event.remove({ id: 'farmersdelight:integration/create/milling/wild_potatoes' })
  event.recipes.create.crushing([
    (getItem(2, dyeRegistry.minecraft.purple)),
    Item.of(dyeRegistry.dyeDepot.indigo).withChance(0.25),
    Item.of(dyeRegistry.minecraft.lime).withChance(0.15)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_beetroots'
  let mod = mods.fd
  event.remove({ id: 'farmersdelight:integration/create/milling/wild_beetroots' })
  event.recipes.create.crushing([
    ('2x minecraft:beetroot_seeds'),
    dyeRegistry.minecraft.green,
    Item.of(dyeRegistry.dyeDepot.maroon).withChance(0.5)
  ], `${mod}${flower}`)
}

{
  let flower = 'wild_rice'
  let mod = mods.fd
  event.remove({ id: 'farmersdelight:integration/create/milling/wild_rice' })
  event.recipes.create.crushing([
    getItem(2, dyeRegistry.dyeDepot.amber),
    Item.of(dyeRegistry.dyeDepot.olive).withChance(0.33)
  ], `${mod}${flower}`)
}

// {
//   let flower = 'dandelion'
//   let mod = mods.mc
//   event.remove({ id: `create:milling/${flower}` })
//   event.recipes.create.crushing([
//     (dyeRegistry.minecraft.yellow).withChance(0.25)
//   ], `${mod}${flower}`)
// }

{
  let beet = 'minecraft:beetroot'
  let beetseed = 'minecraft:beetroot_seeds'
  event.remove({ id: 'minecraft:red_dye_from_beetroot' })
  event.remove({ id: `create:milling/beetroot` })
  event.shapeless(Item.of(dyeRegistry.dyeDepot.maroon), [beet])
  event.recipes.create.crushing([
    beetseed,
    dyeRegistry.dyeDepot.maroon,
    Item.of(dyeRegistry.dyeDepot.maroon).withChance(0.75)
  ], `${beet}`)
}
})
ServerEvents.recipes(event => {
// Misc
event.custom({
  "type": "create:filling",
  "ingredients": [
      {"item": "kubejs:lapis_shard"},
      {"fluid": "create:potion", "amount": 10, "nbt":{"Potion": "minecraft:swiftness"}}
],
  "results": [
      {"item": "minecraft:lapis_lazuli"}
  ]
})

event.remove({ id: 
  'create_dd:crafting/lapis_lazuli_shard_from_lapis_lazuli' 
})

event.remove({ id: 
  'minecraft:blue_dye' 
})


// Crushing (and milling)

// event.recipes.create.crushing(
//   [Item.of
//     ('outputwWithChance')
//       .withChance(0.25),
//   Item.of
//   ('anotherOutputWithChance')
//     .withChance(0.05)
// 
// ],
//   'guranteedOutput',
//
//   'input'
  
event.recipes.create.crushing(
  '9x kubejs:diamond_smithereen', 
  
  'createaddition:diamond_grit')

event.recipes.create.crushing(
  [Item.of
    ('create:copper_nugget')
      .withChance(0.25),
  Item.of
  ('minecraft:sand')
    .withChance(0.05)
  
  ],
  
  '#kubejs:limestone')

event.recipes.create.crushing(
  [Item.of
    ('minecraft:netherite_scrap')
      .withChance(0.5),
  Item.of
    ('minecraft:netherite_scrap')
      .withChance(0.25),
  'minecraft:netherite_scrap'

  ],
  
  'minecraft:ancient_debris')

event.recipes.create.crushing(
  [Item.of
    ('irons_spellbooks:arcane_salvage')
      .withChance(0.5),
  Item.of
    ('irons_spellbooks:arcane_salvage')
      .withChance(0.25),
  'irons_spellbooks:arcane_salvage'

  ],
  
  'irons_spellbooks:arcane_debris')
event.recipes.create.crushing(
  [Item.of
    ('create:zinc_nugget')
      .withChance(0.25),
  Item.of
    ('minecraft:red_sand')
      .withChance(0.05)
    
  ],
      
  'create:scoria')
event.recipes.create.crushing(
  [Item.of
    ('minecraft:bone_meal')
      .withChance(0.2)
  
  ],
      
  'minecraft:egg')

// Mixing
event.remove({id:'create_enchantment_industry:mixing/hyper_experience'})
event.recipes.create.mixing(
  [Fluid.of
    ('create_enchantment_industry:hyper_experience',
      100
    )], 
  [
    'minecraft:lapis_lazuli', 
    'minecraft:glowstone_dust', 
    'kubejs:diamond_smithereen', 
    Fluid.of
      ('create_enchantment_industry:experience', 
        100) 
  ])
  .superheated()

event.recipes.create.mixing(
  [
    '4x minecraft:tuff'
  ], 
  [
    Fluid.of
      ('minecraft:lava', 
        50
      ), 
      '2x minecraft:andesite', 
      '2x minecraft:diorite'
  ])

  event.recipes.create.mixing(
    'minecraft:netherrack', 
    [
      'minecraft:andesite', 
      'minecraft:nether_wart'
    ])
  event.recipes.create.mixing(
    'kubejs:powered_obsidian', 
    [
      '3x kubejs:diamond_smithereen', 
      'minecraft:redstone', 
      'create:powdered_obsidian'
    ])
  event.recipes.create.mixing(
    '3x kubejs:kolbalt_cluster', 
    ['4x kubejs:lapis_shard', 
      '18x minecraft:iron_nugget', 
      '3x minecraft:coal'
    ])
    .heated()
  // event.recipes.create.mixing('8x irons_spellbooks:common_ink', ['1x minecraft:glow_ink_sac', '8x minecraft:ink_sac', '1x ars_nouveau:source_gem']).heated()
  // event.recipes.create.mixing('irons_spellbooks:uncommon_ink', ['4x irons_spellbooks:common_ink', 'minecraft:copper_ingot', Fluid.of('minecraft:water', 1000)]).heated()
  // event.recipes.create.mixing('irons_spellbooks:rare_ink', ['4x irons_spellbooks:uncommon_ink', 'minecraft:iron_ingot', Fluid.of('minecraft:water', 1000)]).heated()
  // event.recipes.create.mixing('irons_spellbooks:epic_ink', ['4x irons_spellbooks:rare_ink', 'minecraft:gold_ingot', Fluid.of('minecraft:water', 1000)]).heated()
  // event.recipes.create.mixing('irons_spellbooks:legendary_ink', ['4x irons_spellbooks:epic_ink', 'minecraft:amethyst_shard', Fluid.of('minecraft:water', 1000)]).heated()


// Compacting
event.recipes.create.compacting(
  'minecraft:coal', 
  '4x minecraft:charcoal'
)
.heated()
event.recipes.create.compacting(
  'minecraft:ink_sac', 
  [Fluid.of
    ('create_enchantment_industry:ink', 
      500)
  ]
)
event.recipes.create.compacting(
  '2x kubejs:kolbalt_alloy', 
  'kubejs:kolbalt_cluster'
)

// Smelting

// Smoking

// Washing

// Haunting
event.recipes.create.haunting(
  [
    Item.of
      ('minecraft:magma_cream')
      .withChance(0.9), 
    Item.of
      ('minecraft:slimeball')
        .withChance(0.1)
  ], 
    'minecraft:slimeball')

// Applying

// Deploying

// Sequenced Assembly
let traa = 'kubejs:incomplete_amirite_aggregate'
	event.recipes.create.sequenced_assembly([
		Item.of('2x kubejs:amirite_aggregate')], 'kubejs:powered_obsidian', [
		event.recipes.createDeploying(traa, [traa, '#forge:nuggets/copper']),
		event.recipes.createDeploying(traa, [traa, '#forge:nuggets/zinc']),
		event.recipes.createDeploying(traa, [traa, '#forge:nuggets/iron']),
		event.recipes.createDeploying(traa, [traa, 'kubejs:andesite_nugget']),
		event.recipes.createDeploying(traa, [traa, '#forge:nuggets/gold']),
		event.recipes.createDeploying(traa, [traa, '#forge:nuggets/brass']),
		event.recipes.createDeploying(traa, [traa, 'kubejs:lapis_shard']),
		event.recipes.createPressing(traa, traa),
		event.recipes.createCutting(traa, traa)

	]).transitionalItem(traa).loops(1)

event.recipes.create.sequenced_assembly([
  Item.of('kubejs:why'),
], 'estrogen:horse_urine_bottle', [ 
  event.recipes.createFilling('kubejs:oh_god', ['kubejs:oh_god', Fluid.of('estrogen:horse_urine', 1000)]),
]).transitionalItem('kubejs:oh_god').loops(100) // set the transitional item and the number of loops
// Shapeless Crafting
event.shapeless(
  '3x kubejs:lapis_shard', 
  [
    'minecraft:lapis_lazuli'
  ])

event.shapeless(
  'minecraft:lapis_lazuli', 
  [
    '3x kubejs:lapis_shard'
  ])

event.shapeless(
  '4x kubejs:andesite_nugget', 
  [
    'create:andesite_alloy'
  ])

event.shapeless(
  'createdeco:zinc_sheet', 
  [
    'createaddition:zinc_sheet'
  ])

event.shapeless(
  'createaddition:zinc_sheet', 
  [
    'createdeco:zinc_sheet'
  ])

event.shapeless(
  '9x kubejs:kolbalt_alloy', 
  [
    'kubejs:kolbalt_block'
  ])

event.shapeless(
  'ars_elemental:yellow_archwood_sapling', 
  [
    'ars_nouveau:red_archwood_sapling', 
    'ars_nouveau:manipulation_essence', 
    'minecraft:glowstone_dust'
  ])

event.remove({ id: 
  'create_dd:crafting/lapis_lazuli_shard_from_lapis_lazuli' 
})

event.shapeless(
  '2x farmersrespite:coffee_berries', 
  [
    '2x createcafe:coffee_fruit'
  ])

event.shapeless(
  '2x createcafe:coffee_fruit', 
  [
    '2x farmersrespite:coffee_berries'
  ])

event.shapeless(
  '2x farmersrespite:coffee_beans', 
  [
    '2x createcafe:coffee_beans'
  ])

event.shapeless(
  '2x createcafe:coffee_beans', 
  [
    '2x farmersrespite:coffee_beans'
  ])

event.shapeless(
  'farmersrespite:tea_seeds', 
  [
    'delightful:green_tea_leaf'
  ])

// Shaped Crafting
event.shaped(
  Item.of('kubejs:kolbalt_sheet_metal', 4), 
  [
    'AA ',
    'AA '
  ],
  {
    A: 'kubejs:kolbalt_alloy'
})

event.shaped(
  Item.of('kubejs:kolbalt_block'), 
  [
    'AAA',
    'AAA',
    'AAA'
  ],
  {
    A: 'kubejs:kolbalt_alloy'
  })

event.shaped(
  Item.of('create:andesite_alloy'), 
  [
    'AA ',
    'AA '
  ],
  {
    A: 'kubejs:andesite_nugget'
  })
})
// AI Suggestions I might use later

// // Utility Classes
// class ItemHelper {
//   static getQuantifiedItem(baseItem, quantity) {
//     return `${quantity}x ${baseItem}`;
//   }

//   static withChance(item, chance) {
//     return Item.of(item).withChance(chance);
//   }
// }

// // Recipe Managers
// class CrushingRecipeManager {
//   constructor(event) {
//     this.event = event;
//   }

//   addFlowerCrushingRecipe(config) {
//     const { flower, mod, outputs, removeExisting = true } = config;
    
//     if (removeExisting) {
//       this.event.remove({ id: `create:milling/${flower}` });
//     }
    
//     this.event.recipes.create.crushing(outputs, `${mod}${flower}`);
//   }
// }

// class MixingRecipeManager {
//   constructor(event) {
//     this.event = event;
//   }

//   addMixingRecipe(output, inputs, options = {}) {
//     const recipe = this.event.recipes.create.mixing(output, inputs);
//     if (options.heated) recipe.heated();
//     if (options.superheated) recipe.superheated();
//   }
// }

// // Recipe Registry
// class RecipeRegistry {
//   constructor(event) {
//     this.event = event;
//     this.crushingManager = new CrushingRecipeManager(event);
//     this.mixingManager = new MixingRecipeManager(event);
//   }

//   registerFlowerCrushingRecipes() {
//     // Example of a more organized flower crushing recipe
//     this.crushingManager.addFlowerCrushingRecipe({
//       flower: 'dandelion',
//       mod: MOD_NAMESPACES.minecraft,
//       outputs: [
//         dyeReg.mods.mc.dyeRegistry.minecraft.yellow,
//         ItemHelper.withChance(dyeReg.mods.mc.dyeRegistry.minecraft.yellow, 0.25)
//       ]
//     });
//     // Add other flower recipes...
//   }

//   registerMixingRecipes() {
//     this.mixingManager.addMixingRecipe(
//       'minecraft:tuff',
//       [
//         Fluid.of('minecraft:lava', 50),
//         '2x minecraft:andesite',
//         '2x minecraft:diorite'
//       ],
//       { heated: true }
//     );
//     // Add other mixing recipes...
//   }
// }

// // Main Event Handlers
// ServerEvents.tags('item', event => {
//   event.add('kubejs:limestone', ['create:limestone', 'alexscaves:limestone']);
// });

// ServerEvents.recipes(event => {
//   const registry = new RecipeRegistry(event);
  
//   // Remove existing recipes
//   const recipesToRemove = [
//     'create_dd:crafting/lapis_lazuli_shard_from_lapis_lazuli',
//     'minecraft:blue_dye'
//   ];
//   recipesToRemove.forEach(id => event.remove({ id }));

//   // Register new recipes
//   registry.registerFlowerCrushingRecipes();
//   registry.registerMixingRecipes();
//   // Register other recipe types...
// });
