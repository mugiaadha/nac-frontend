export type SiteSettings = {
  address: string;
  phone: string;
  email: string;
  copyright: string;
  logo: string;
};

export type SiteAction =
  | { type: "SET_DATA"; payload: SiteSettings }
  | { type: "ERROR" };

export function siteReducer(
  state: SiteSettings | null,
  action: SiteAction
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
