import { atom } from "recoil";
import { CANDY_MACHINE_START_TIME } from "./constants";

export const isDropActiveState = atom<boolean>({
  key: "isDropActiveState",
  default: CANDY_MACHINE_START_TIME < new Date(),
});

export const checkingSoldOutState = atom<boolean>({
  key: "checkingSoldOut",
  default: false,
});

export const isSoldOutState = atom<boolean>({
  key: "isDropSoldOut",
  default: false,
});
