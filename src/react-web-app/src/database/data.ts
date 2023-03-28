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

const info = [
  {
    category: 'cocktails',
    drinks: [
      {
        name: 'Whiskey Sour',
        image: WhiskeySour,
        category: 'cocktails',
        ingredients: {
                      IG1: {name: 'whiskey', amount: 37.5},
                      IG2: {name: 'lemon juice', amount: 75},
                      IG3: {name: 'syrup', amount: 75},
                      IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Old Fashioned',
        image: OldFashioned,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'vodka', amount: 37.5},
          IG2: {name: 'coke', amount: 15},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
}
      },
      {
        name: 'Daiquiri',
        image: Daiquiri,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'vodka', amount: 37.5},
          IG2: {name: 'lemon juice', amount: 75},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
}
      },
      {
        name: 'Rum and Coke',
        image: RumAndCoke,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'rum', amount: 37.5},
          IG2: {name: 'coke', amount: 37.5},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
}
      },
      {
        name: 'Moscow Mule',
        image: MoscowMule,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'whiskey', amount: 37.5},
          IG2: {name: 'vodka', amount: 15},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
}
      },
      {
        name: 'Orange Rum Fizz',
        image: OrangeRum,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'rum', amount: 37.5},
          IG2: {name: 'orange juice', amount: 37.5},
          IG3: {name: 'club soda', amount: 37.5},
          IG4: {name: null, amount: null}
}
      },
      {
        name: 'Rum Punch',
        image: RumPunch,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'rum', amount: 37.5},
          IG2: {name: 'orange juice', amount: 37.5},
          IG3: {name: 'lemonade', amount: 37.5},
          IG4: {name: 'pineapple juice', amount: 37.5}
}
      },
    ],
  },
  {
    category: 'spirits',
    drinks: [
      {
        name: 'Vodka',
        image: GreyGoose,
        category: 'spirits',
        ingredients: {
          IG1: {name: 'vodka', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Rum',
        image: Bacardi,
        category: 'spirits',
        ingredients: {
          IG1: {name: 'rum', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Tequila',
        image: Tequila,
        category: 'spirits',
        ingredients: {
          IG1: {name: 'tequila', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
    ],
  },
  {
    category: 'juice',
    drinks: [
      {
        name: 'Lemon Juice',
        image: LJ,
        category: 'juice',
        ingredients: {
          IG1: {name: 'lemon juice', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Orange Juice',
        image: OJ,
        category: 'juice',
        ingredients: {
          IG1: {name: 'orange juice', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Pineapple Juice',
        image: PJ,
        category: 'juice',
        ingredients: {
          IG1: {name: 'pineapple juice', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Syrup',
        image: Syrup,
        category: 'juice',
        ingredients: {
          IG1: {name: 'syrup', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Club Soda',
        image: CS,
        category: 'juice',
        ingredients: {
          IG1: {name: 'club soda', amount: 37.5},
          IG2: {name: null, amount: null},
          IG3: {name: null, amount: null},
          IG4: {name: null, amount: null}
        }
      },
    ],
  },
];

export default info;
