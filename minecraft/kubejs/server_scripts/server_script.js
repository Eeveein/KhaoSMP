
ServerEvents.tags('item', event => {
    event.add('kubejs:limestone', 'create:limestone', 'alexscaves:limestone')

    })

ServerEvents.recipes(event => {
// Misc
    event.remove({id:'create_enchantment_industry:mixing/hyper_experience'})
    event.recipes.create.crushing('9x kubejs:diamond_smithereen', 'createaddition:diamond_grit')
    event.recipes.create.mixing([Fluid.of('create_enchantment_industry:hyper_experience', 100)], ['minecraft:lapis_lazuli', 'minecraft:glowstone_dust', 'kubejs:diamond_smithereen', Fluid.of('create_enchantment_industry:experience', 100) ]).superheated()
    event.recipes.create.mixing('minecraft:netherrack', ['minecraft:andesite', 'minecraft:nether_wart'])
    event.recipes.create.mixing('kubejs:powered_obsidian', ['3x kubejs:diamond_smithereen', 'minecraft:redstone', 'create:powdered_obsidian'])
    event.recipes.create.mixing('3x kubejs:kolbalt_cluster', ['3x kubejs:lapis_shard', '18x minecraft:iron_nugget', '3x minecraft:coal'])
    event.recipes.create.crushing([Item.of('create:copper_nugget').withChance(0.25), Item.of('minecraft:sand').withChance(0.05)], '#kubejs:limestone')
    event.recipes.create.crushing([Item.of('create:zinc_nugget').withChance(0.25), Item.of('minecraft:red_sand').withChance(0.05)], 'create:scoria')
    event.recipes.create.compacting('minecraft:coal', '4x minecraft:charcoal').heated()
    event.recipes.create.compacting('2x kubejs:kolbalt_alloy', 'kubejs:kolbalt_cluster').heated()
    event.recipes.create.haunting([Item.of('minecraft:magma_cream').withChance(0.9), Item.of('minecraft:slimeball').withChance(0.1)], 'minecraft:slimeball')
    event.recipes.create.haunting(['minecraft:wheat', Item.of('minecraft:oak_sapling').withChance(0.2)], 'minecraft:potato')
    event.recipes.create.item_application('kubejs:kolbalt_casing', ['minecraft:stone', 'kubejs:kolbalt_alloy'])
// Shapeless
    event.shapeless(
        Item.of('kubejs:lapis_shard', 3), 
        ['minecraft:lapis_lazuli'])
    event.shapeless(
        Item.of('minecraft:lapis_lazuli'), 
        ['kubejs:lapis_shard', 'kubejs:lapis_shard', 'kubejs:lapis_shard'])
    event.shapeless(
        Item.of('kubejs:andesite_nugget', 4), 
        ['create:andesite_alloy'])
// Shaped
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
})