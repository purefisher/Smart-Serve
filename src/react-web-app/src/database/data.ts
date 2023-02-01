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
      },
      {
        name: 'Old Fashioned',
        image: OldFashioned,
        category: 'cocktails',
      },
      {
        name: 'Daiquiri',
        image: Daiquiri,
        category: 'cocktails',
      },
      {
        name: 'Rum and Coke',
        image: RumAndCoke,
        category: 'cocktails',
      },
      {
        name: 'Moscow Mule',
        image: MoscowMule,
        category: 'cocktails',
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
      },
      {
        name: 'Rum',
        image: Bacardi,
        category: 'spirits',
      },
      {
        name: 'Tequila',
        image: Tequila,
        category: 'spirits',
      },
    ],
  },
];

export default info;
