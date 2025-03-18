StartupEvents.registry('item', event => {
  
	event.create('diamond_smithereen')
		.displayName("Diamond Smithereen")
	event.create('powered_obsidian')
		.displayName("Powered Obsidian")
		.tooltip('§8..get it?')
	event.create('amirite_aggregate')
		.displayName("Amirite Aggregate")
		.tooltip('§8A catalyst which has gathered the energy of those in this world.')
	event.create('incomplete_amirite_aggregate', 'create:sequenced_assembly')
		.displayName("Incomplete Amirite Aggregate")
	event.create('lapis_shard')
		.displayName("Lapis Shard")
	event.create('kolbalt_cluster')
		.displayName("Kolbalt Cluster")
	event.create('kolbalt_alloy')
		.displayName("Kolbalt Alloy")
	event.create('andesite_nugget')
		.displayName("Andesite Nugget")
		.tooltip('§8Chunky.')
	event.create('why')
		.displayName("The Piss Singularity")
		.tooltip('§8Why.')
		.food(food =>
			food
			  .hunger(1000)
			  .saturation(1000))

			
	event.create('oh_god', 'create:sequenced_assembly')
		.displayName("Oh god")
		.tooltip('Please no.')


})

StartupEvents.registry("block", (event) => {
	event.create("kolbalt_casing")
		.displayName("Kolbalt Casing")
		.soundType('stone')
		.hardness(1.0)
		.resistance(1.0)
		.textureAll("kubejs:block/kolbalt_casing")
		.tagBlock("mineable/pickaxe")
		.model('kubejs:block/kolbalt_casing')

	event.create("kolbalt_block")
		.displayName("Block of Kolbalt")
		.soundType('metal')
		.hardness(1.0)
		.resistance(1.0)
		.textureAll("kubejs:block/kolbalt_block")
		.tagBlock("mineable/pickaxe")

	event.create("kolbalt_sheet_metal")
		.displayName("Kolbalt Sheet Metal")
		.soundType('netherite_block')
		.hardness(1.0)
		.resistance(1.0)
		.textureAll("kubejs:block/kolbalt_sheet_metal")
		.tagBlock("mineable/pickaxe")
		.model('kubejs:block/kolbalt_sheet_metal')
  })