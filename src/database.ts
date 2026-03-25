// MVP In-Memory Database for Demo
import { User, Market, Position, Transaction } from './types';

export const users: User[] = [
  {
    id: 'user1',
    username: 'KwameBet',
    email: 'kwame@newpot.com',
    phoneNumber: '+233241234567',
    country: 'GH',
    balances: {
      BTC: 0.045,
      ETH: 1.2,
      SOL: 45.0,
      XLM: 5000,
      XRP: 250,
      BONK: 12000000
    },
    mobileMoneyBalances: [
      {
        provider: 'MTN',
        phoneNumber: '+233241234567',
        balance: 1250.50,
        currency: 'GHS'
      },
      {
        provider: 'VODAFONE',
        phoneNumber: '+233271234567',
        balance: 890.25,
        currency: 'GHS'
      }
    ],
    createdAt: new Date()
  }
];

// SHORT-TERM MARKETS (resolve in days/weeks)
export const markets: Market[] = [
  {
    id: '1',
    title: 'Will Hearts of Oak beat Kotoko in next GPL Super Clash?',
    description: 'Ghana\'s biggest rivalry. Hearts won 1-0 last meeting (Feb 2026). Next GPL Super Clash date TBA. Market settles on official GPL result.',
    category: 'Sports',
    endDate: new Date('2026-04-30T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.48,
    noPrice: 0.52,
    volume: 320000,
    totalYesShares: 1500,
    totalNoShares: 1600,
    imageUrl: 'https://picsum.photos/seed/hearts-kotoko/800/400',
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Will Ghana have nationwide dumsor this week?',
    description: 'ECG/GRIDCo situation. Energy Minister promises stable supply. NPP calling for repeal of dumsor levy. Monitor ECG announcements.',
    category: 'Economy',
    endDate: new Date('2026-04-01T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.30,
    noPrice: 0.70,
    volume: 180000,
    totalYesShares: 550,
    totalNoShares: 1300,
    imageUrl: 'https://picsum.photos/seed/dumsor/800/400',
    createdAt: new Date()
  },
  {
    id: '3',
    title: 'Cedi vs USD: Will it be below ¢15 by Friday?',
    description: 'Cedi has been volatile. Currently trading around ¢14.50-15.00. Bank of Ghana interventions expected. Market settles on BOG closing rate Friday.',
    category: 'Economy',
    endDate: new Date('2026-04-03T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.55,
    noPrice: 0.45,
    volume: 250000,
    totalYesShares: 1400,
    totalNoShares: 1150,
    imageUrl: 'https://picsum.photos/seed/cedi/800/400',
    createdAt: new Date()
  },
  {
    id: '4',
    title: 'Will Mahama address nation on TV this week?',
    description: 'President addresses nation on major issues. Recent topics: economy, dumsor, national security. Check GJA/GBC schedules.',
    category: 'Politics',
    endDate: new Date('2026-04-05T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: 120000,
    totalYesShares: 680,
    totalNoShares: 830,
    imageUrl: 'https://picsum.photos/seed/mahama/800/400',
    createdAt: new Date()
  },
  {
    id: '5',
    title: 'Will Gold Stars maintain GPL top spot by April?',
    description: 'Gold Stars currently TOP of GPL after matchweek 26. Title race tightens. Settles on standings after April matches.',
    category: 'Sports',
    endDate: new Date('2026-04-30T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.50,
    noPrice: 0.50,
    volume: 200000,
    totalYesShares: 1000,
    totalNoShares: 1000,
    imageUrl: 'https://picsum.photos/seed/goldstars/800/400',
    createdAt: new Date()
  },

  // LONG-TERM MARKETS (months/years)
  {
    id: '6',
    title: 'Will Bawumia win Ghana 2028 Presidential Election?',
    description: 'Dr Bawumia won NPP primary with 56.48%. He faces NDC winner (likely Haruna Iddrisu). NDC candidates polling ahead. Settles on EC official results December 2028.',
    category: 'Politics',
    endDate: new Date('2028-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: 450000,
    totalYesShares: 2000,
    totalNoShares: 2400,
    imageUrl: 'https://picsum.photos/seed/bawumia2028/800/400',
    createdAt: new Date()
  },
  {
    id: '7',
    title: 'Will Ghana\'s Anti-LGBT Bill pass Parliament in 2026?',
    description: 'Parliament revived controversial bill February 2026. Human Rights Watch calls it "draconian." Debate ongoing. Settles on Presidential assent.',
    category: 'Politics',
    endDate: new Date('2026-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.65,
    noPrice: 0.35,
    volume: 520000,
    totalYesShares: 3200,
    totalNoShares: 1800,
    imageUrl: 'https://picsum.photos/seed/lgbtbill/800/400',
    createdAt: new Date()
  },
  {
    id: '8',
    title: 'Will Ghana beat Nigeria to host AFCON 2027?',
    description: 'Ghana in talks with CAF. Nigeria also bidding. CAF decision expected mid-2026. Settles on official CAF announcement.',
    category: 'Sports',
    endDate: new Date('2026-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.40,
    noPrice: 0.60,
    volume: 350000,
    totalYesShares: 1400,
    totalNoShares: 2100,
    imageUrl: 'https://picsum.photos/seed/afconhost/800/400',
    createdAt: new Date()
  },
  {
    id: '9',
    title: 'Will Mahama\'s Emoluments Policy pass by December 2026?',
    description: 'Mahama announced policy to reform public sector pay. Unions demanding better salaries. Parliament must approve.',
    category: 'Governance',
    endDate: new Date('2026-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.58,
    noPrice: 0.42,
    volume: 190000,
    totalYesShares: 1100,
    totalNoShares: 800,
    imageUrl: 'https://picsum.photos/seed/emoluments/800/400',
    createdAt: new Date()
  },
  {
    id: '10',
    title: 'Will Kwahu Easter 2026 draw 500,000+ visitors?',
    description: 'Ghana\'s biggest religious/cultural festival. April 3-6, 2026. Kwahu loading! Police/Tourism estimates determine outcome.',
    category: 'Religion',
    endDate: new Date('2026-04-30T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.62,
    noPrice: 0.38,
    volume: 150000,
    totalYesShares: 900,
    totalNoShares: 550,
    imageUrl: 'https://picsum.photos/seed/kwahueaster/800/400',
    createdAt: new Date()
  },
  {
    id: '11',
    title: 'Will BTC exceed $150k before December 2026?',
    description: 'Bitcoin rising. Institutional adoption growing. Global uncertainty. Risk-on sentiment. Binance closing price December 2026.',
    category: 'Crypto',
    endDate: new Date('2026-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.52,
    noPrice: 0.48,
    volume: 580000,
    totalYesShares: 1650,
    totalNoShares: 1520,
    imageUrl: 'https://picsum.photos/seed/btc150k/800/400',
    createdAt: new Date()
  },
  {
    id: '12',
    title: 'Will Ghana economy grow above 6% in 2026?',
    description: 'World Bank pledged $3B. Mahama confident. BoG Governor warns Middle East risks. GSS GDP data Q4 2026.',
    category: 'Economy',
    endDate: new Date('2026-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.55,
    noPrice: 0.45,
    volume: 320000,
    totalYesShares: 1800,
    totalNoShares: 1500,
    imageUrl: 'https://picsum.photos/seed/ghana-economy/800/400',
    createdAt: new Date()
  }
];

export const positions: Position[] = [];
export const transactions: Transaction[] = [];

export const findUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const findUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};

export const findMarketById = (id: string): Market | undefined => {
  return markets.find(market => market.id === id);
};

export const addPosition = (position: Position): void => {
  positions.push(position);
};

export const addTransaction = (transaction: Transaction): void => {
  transactions.push(transaction);
};

export const getUserPositions = (userId: string): Position[] => {
  return positions.filter(position => position.userId === userId);
};

export const getUserTransactions = (userId: string): Transaction[] => {
  return transactions.filter(transaction => transaction.userId === userId);
};
