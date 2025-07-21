export type SiteSettings = {
  address: string;
  phone: string;
  email: string;
  copyright: string;
  logo: string;
};

export type FooterAction =
  | { type: "SET_DATA"; payload: SiteSettings }
  | { type: "ERROR" };

export function footerReducer(
  state: SiteSettings | null,
  action: FooterAction
): SiteSettings | null {
  switch (action.type) {
    case "SET_DATA":
      return { ...action.payload };
    case "ERROR":
      return null;
    default:
      return state;
  }
}
