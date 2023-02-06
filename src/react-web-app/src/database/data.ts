import Bacardi from '../images/rum.jpg';
import Daiquiri from '../images/daiquiri.jpg';
import GreyGoose from '../images/vodka.jpg';
import MoscowMule from '../images/mm.jpg';
import OldFashioned from '../images/old_fashioned.jpg';
import RumAndCoke from '../images/rc.jpg';
import WhiskeySour from '../images/ws.jpg';
import Tequila from '../images/tequila.jpg';

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
                      IG2: {name: 'lemonade', amount: 75},
                      IG3: {name: 'water', amount: 17.5},
                      IG4: {name: null, amount: null}
        }
      },
      {
        name: 'Old Fashioned',
        image: OldFashioned,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'vodka', amount: 37.5},
          IG2: {name: 'orange_juice', amount: 75},
          IG3: {name: 'apple sauce', amount: 17.5},
          IG4: {name: null, amount: null}
}
      },
      {
        name: 'Daiquiri',
        image: Daiquiri,
        category: 'cocktails',
        ingredients: {
          IG1: {name: 'whiskey', amount: 37.5},
          IG2: {name: 'lemonade', amount: 75},
          IG3: {name: 'water', amount: 17.5},
          IG4: {name: 'pom', amount: 15}
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
          IG2: {name: 'sprite', amount: 75},
          IG3: {name: 'water', amount: 17.5},
          IG4: {name: 'vodka', amount: 15}
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
];

export default info;
