export type FooterType = {
  address: string;
  phone: string;
  email: string;
  copyright: string;
  logo: string;
};

export type FooterAction =
  | { type: 'SET_DATA'; payload: FooterType }
  | { type: 'ERROR' };

export function footerReducer(state: FooterType | null, action: FooterAction): FooterType | null {
  switch (action.type) {
    case 'SET_DATA':
      return { ...action.payload };
    case 'ERROR':
      return null;
    default:
      return state;
  }
}
