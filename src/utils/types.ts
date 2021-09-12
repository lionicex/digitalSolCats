export interface CandyMachineState {
  isSoldOut: boolean;
  itemsAvailable: number;
  itemsRedeemed: number;
}

export interface CMItems {
  available: number;
  redeemed: number;
}
