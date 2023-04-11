import Bacardi from '../images/rum.jpg';
import Daiquiri from '../images/daiquiri.jpg';
import GreyGoose from '../images/vodka.jpg';
import MoscowMule from '../images/mm.jpg';
import OldFashioned from '../images/old_fashioned.jpg';
import RumAndCoke from '../images/rc.jpg';
import WhiskeySour from '../images/ws.jpg';
import Tequila from '../images/tequila.jpg';
import OrangeRum from '../images/OrangeFizz.jpg';
import RumPunch from '../images/RumPunch.jpg';
import LJ from '../images/LemonJuice.png';
import OJ from '../images/OJ.jpg';
import PJ from '../images/PJ.jpeg';
import Syrup from '../images/syrup.jpg';
import CS from '../images/CS.jpg';
import Whiskey from '../images/whiskey.jpg';
import Coke from '../images/coke.jpg';
import Lemonade from '../images/lemonade.jpg';
import Sprite from '../images/sprite.jpg';
import OrangeSpritzer from '../images/orangespritzer.jpg';
import GingerAle from '../images/gingerale.jpg';
import GingerAleandOrange from '../images/gingeraleandorange.jpg';
import ShirleyTemple from '../images/shirleytemple.jpg';
import MaxSpecial from '../images/maxspecial.jpg';

const info = [
  {
    category: 'Drinks',
    drinks: [
      {
        name: 'Whiskey Sour',
        image: WhiskeySour,
        category: 'Drinks',
        ingredients: {
                      IG1: {name: 'whiskey', amount: 43, shot: ",1"},
                      IG2: {name: 'lemonade', amount: 129, shot: ",3"},
                      IG3: {name: null, amount: null, shot: null},
                      IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Old Fashioned',
        image: OldFashioned,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'vodka', amount: 43, shot: ",1"},
          IG2: {name: 'coke', amount: 129, shot: ",3"},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Daiquiri',
        image: Daiquiri,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'vodka', amount: 43, shot: ",1"},
          IG2: {name: 'lemon juice', amount: 129, shot: ",3"},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Rum and Coke',
        image: RumAndCoke,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'rum', amount: 43, shot: ",1"},
          IG2: {name: 'coke', amount: 129, shot: ",3"},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Moscow Mule',
        image: MoscowMule,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'whiskey', amount: 43, shot: ",1"},
          IG2: {name: 'vodka', amount: 43, shot: ",1"},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Orange Rum Fizz',
        image: OrangeRum,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'rum', amount: 43, shot: ",1"},
          IG2: {name: 'orange juice', amount: 129, shot: ",3"},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Rum Punch',
        image: RumPunch,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'rum', amount: 43, shot: ",1"},
          IG2: {name: 'orange juice', amount: 64.5, shot: ",1.5"},
          IG3: {name: 'lemonade', amount: 64.5, shot: ",1.5"},
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Orange Spritzer',
        image: OrangeSpritzer,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'orange juice', amount: 129, shot: ",3"},
          IG2: {name: 'club soda', amount: 43, shot: ",1"},
          IG3: {name: null, amount: null, shot: null },
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Ginger Ale and OJ Mocktail',
        image: GingerAleandOrange,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'orange juice', amount: 86, shot: ",1.5"},
          IG2: {name: 'gingerale', amount: 86, shot: ",1.5"},
          IG3: {name: null, amount: null, shot: null },
          IG4: {name: null, amount: null, shot: null}
}
      },
      {
        name: 'Shirley Temple',
        image: ShirleyTemple,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'orange juice', amount: 43, shot: ",1"},
          IG2: {name: 'gingerale', amount: 43, shot: ",1"},
          IG3: {name: 'sprite', amount: 43, shot: ",1" },
          IG4: {name: 'grenadine', amount: 10.75, shot: ",.25" }
}
      },
      {
        name: 'Max\'s Special',
        image: MaxSpecial,
        category: 'Drinks',
        ingredients: {
          IG1: {name: 'sprite', amount: 64.5, shot: ",1.5"},
          IG2: {name: 'orange juice', amount: 64.5, shot: ",1.5"},
          IG3: {name: 'club soda', amount: 43, shot: ",1" },
          IG4: {name: null, amount: null, shot: null }
}
      },
    ],
  },
  {
    category: 'Liquor',
    drinks: [
      {
        name: 'Vodka',
        image: GreyGoose,
        category: 'Liquor',
        ingredients: {
          IG1: {name: 'vodka', amount: 43, shot: ",1"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Rum',
        image: Bacardi,
        category: 'Liquor',
        ingredients: {
          IG1: {name: 'rum', amount: 43, shot: ",1"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Tequila',
        image: Tequila,
        category: 'Liquor',
        ingredients: {
          IG1: {name: 'tequila', amount: 43, shot: ",1"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Whiskey',
        image: Whiskey,
        category: 'Liquor',
        ingredients: {
          IG1: {name: 'whiskey', amount: 43, shot: ",1"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
    ],
  },
  {
    category: 'Juice',
    drinks: [
      {
        name: 'Lemon Juice',
        image: LJ,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'lemon juice', amount: 43, shot: ",1"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Orange Juice',
        image: OJ,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'orange juice', amount: 172, shot: ",4"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Pineapple Juice',
        image: PJ,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'pineapple juice', amount: 172, shot: ",4"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Syrup',
        image: Syrup,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'syrup', amount: 43, shot: ",1"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Club Soda',
        image: CS,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'club soda', amount: 172, shot: ",4"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Lemonade',
        image: Lemonade,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'lemonade', amount: 172, shot: ",4"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Coke',
        image: Coke,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'coke', amount: 172, shot: ",4"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Sprite',
        image: Sprite,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'sprite', amount: 172, shot: ",4"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
      {
        name: 'Ginger Ale',
        image: GingerAle,
        category: 'Juice',
        ingredients: {
          IG1: {name: 'gingerale', amount: 172, shot: ",4"},
          IG2: {name: null, amount: null, shot: null},
          IG3: {name: null, amount: null, shot: null},
          IG4: {name: null, amount: null, shot: null}
        }
      },
    ],
  },
];

export default info;
