// MVP In-Memory Database for Demo
import { User, Market, Position, Transaction } from './types';

// Mock data that matches frontend expectations
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

export const markets: Market[] = [
  {
    id: '1',
    title: 'Will Bawumia win Ghana 2028 Presidential Election?',
    description: 'Dr Bawumia won NPP primary with 56.48%. He faces NDC winner (likely Haruna Iddrisu or similar). Market settles on official EC results December 2028.',
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
    id: '2',
    title: 'Will Ghana economy grow above 6% in 2026?',
    description: 'World Bank pledged $3B investment. Mahama confident of rebound. Bank of Ghana Governor warns of Middle East risks. Market settles on GSS GDP data Q4 2026.',
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
  },
  {
    id: '3',
    title: 'Will Ghana abolish the GH¢1 Dumsor Levy in 2026?',
    description: 'NPP Minority calls for repeal. Energy sector debt clearing. Parliament to vote. Market settles on actual repeal or continuation.',
    category: 'Politics',
    endDate: new Date('2026-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.38,
    noPrice: 0.62,
    volume: 180000,
    totalYesShares: 900,
    totalNoShares: 1450,
    imageUrl: 'https://picsum.photos/seed/dumsor/800/400',
    createdAt: new Date()
  },
  {
    id: '4',
    title: 'Will AFCON 2027 be hosted in Ghana?',
    description: 'Ghana reportedly in talks to host AFCON 2027. CAF decision expected mid-2026. Market settles on official announcement.',
    category: 'Sports',
    endDate: new Date('2026-12-31T23:59:59Z'),
    isResolved: false,
    yesPrice: 0.42,
    noPrice: 0.58,
    volume: 220000,
    totalYesShares: 1100,
    totalNoShares: 1500,
    imageUrl: 'https://picsum.photos/seed/afcon2027/800/400',
    createdAt: new Date()
  },
  {
    id: '5',
    title: 'Will BTC exceed $150k before December 2026?',
    description: 'Bitcoin has been rising. Institutional adoption growing. Market settles on Binance closing price December 2026.',
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
  }
];

export const positions: Position[] = [];
export const transactions: Transaction[] = [];

// Helper functions for MVP
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
