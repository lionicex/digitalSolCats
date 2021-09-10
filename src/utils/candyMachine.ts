import * as anchor from "@project-serum/anchor";
import {
  CANDY_MACHINE_PROGRAM_ID,
  CANDY_MACHINE_STATE_ACCOUNT_ID,
  RPC_CONNECTION,
} from "./constants";
import { CandyMachineState } from "./types";

export const getCandyMachineState = async (
  wallet: anchor.Wallet
): Promise<CandyMachineState> => {
  const program = await loadAnchorProgram(wallet);
  const state: any = await program.account.candyMachine.fetch(
    CANDY_MACHINE_STATE_ACCOUNT_ID
  );
  const itemsAvailable = state.data.itemsAvailable.toNumber();
  const itemsRedeemed = state.itemsRedeemed.toNumber();
  return {
    isSoldOut: itemsAvailable === itemsRedeemed,
    itemsAvailable,
    itemsRedeemed,
  };
};

const loadAnchorProgram = async (wallet: anchor.Wallet) => {
  const provider = new anchor.Provider(RPC_CONNECTION, wallet, {
    preflightCommitment: "recent",
  });
  const idl = await anchor.Program.fetchIdl(CANDY_MACHINE_PROGRAM_ID, provider);
  return new anchor.Program(idl, CANDY_MACHINE_PROGRAM_ID, provider);
};
