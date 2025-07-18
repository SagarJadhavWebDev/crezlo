import { Data } from "../../types";
import { PrivateAppState } from "../../types/Internal";
export type ItemSelector = {
    index: number;
    zone?: string;
};
export declare function getItem<UserData extends Data>(selector: ItemSelector, state: PrivateAppState): UserData["content"][0] | undefined;
