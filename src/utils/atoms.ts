import { atom } from "recoil";
import { CANDY_MACHINE_START_TIME, IS_DROP_SOLD_OUT } from "./constants";

export const isDropActiveState = atom<boolean>({
  key: "isDropActiveState",
  default: CANDY_MACHINE_START_TIME < new Date(),
});

export const checkingSoldOutState = atom<boolean>({
  key: "checkingSoldOut",
  default: false,
});

export const isSoldOutState = atom<boolean>({
  key: "isSoldOut",
  default: IS_DROP_SOLD_OUT,
});
