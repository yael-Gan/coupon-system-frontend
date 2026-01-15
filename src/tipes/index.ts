export interface Customer {
  id: number;
  name: string;
  email: string;
}

export interface Company {
  id: number;
  name: string;
  email: string;
}

export interface Coupon {
  id: number;
  title: string;
  description: string;
  companyId: number;
  isActive: boolean;
}
