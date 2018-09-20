class Spaceship {
  constructor(name,crew,phasers,shields){ //crew is an array stores crewMembers, but this test set it as crew
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.crew = crew

    crew.forEach( function(crewMember){
      crewMember.currentShip = this
    }.bind(this))

    if (crew.length === 0){
      return this.docked = true
    } else {
      return this.docked = false;
    }
  }


}
