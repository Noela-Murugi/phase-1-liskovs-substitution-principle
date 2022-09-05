class Reptile {
    constructor(name) {
      this.name = name;
    }
    get move() {
      return `${this.name} crawls away`;
    }
  }

  // Lizard inherits `move` because it crawls
  class Lizard extends Reptile {}

  //  Snake overrides `move` because it cannot crawl
  class Snake extends Reptile {
    get move() {
      return `${this.name} slithers away`;
    }
  }


  class Reptile {
    constructor(name) {
      this.name = name;
    }
  }

  // legless reptiles slither
  class LeglessReptile extends Reptile {
    move() {
      return `${this.name} slithers away`;
    }
  }

  // legged reptiles crawl
  class LeggedReptile extends Reptile {
    move() {
      return `${this.name} crawls away`;
    }
  }

  class Lizard extends LeggedReptile {}
  class Snake extends LeglessReptile {}
