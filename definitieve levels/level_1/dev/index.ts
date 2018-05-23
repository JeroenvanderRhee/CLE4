import * as ex from 'excalibur';

class Game extends ex.Engine {
  constructor() {
    super({ width: 800, height: 600, displayMode: ex.DisplayMode.FullScreen });
  }

  public start() {
    return super.start();
  }
}

const game = new Game();


game.start().then(() => {
  game.goToScene('levelOne');
});

