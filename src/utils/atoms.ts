import { atom } from "recoil";
import { CANDY_MACHINE_START_TIME } from "./constants";
import { CMItems } from "./types";

export const isDropActiveState = atom<boolean>({
  key: "isDropActiveState",
  default: CANDY_MACHINE_START_TIME < new Date(),
});

export const isCMStateLoadedState = atom<boolean>({
  key: "isCandyMachineStateLoaded",
  default: false,
});

export const isDropSoldOutState = atom<boolean>({
  key: "isDropSoldOut",
  default: false,
});

export const CMItemsState = atom<CMItems>({
  key: "CMItems",
  default: {
    available: 1,
    redeemed: 0,
  },
});
