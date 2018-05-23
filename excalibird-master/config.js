
// game configuration

var Config = {

	BirdWidth: 20,
	BirdHeight: 50,
	BirdImpulse: -200,
	BirdAccel: 1000,
	BirdMaxVel: 1000,
	BirdScale: 1,

	LevelSpeed: -250,
	LevelAccel: 0,
	LevelDensity: 1, // pipe per screen

	TowerWidth: 61,
	TowerStacks: 10,
	TowerGap: 90,
	TowerTimer: 2000,

	_dirty: false,
	reload: function(){
		this._dirty = true;
	}
}