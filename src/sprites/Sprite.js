export default class Sprite {
  constructor(id, name, costume) {
    this.id = id;
    this.name = name;
    this.costume = costume;

    this.x = 0;
    this.y = 0;
    
    this.direction = 0; // radians
    this.size = 100;    // percent
    this.visible = true;
  }
}
