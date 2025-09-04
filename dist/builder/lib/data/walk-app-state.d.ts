import { ComponentData, Config, Content, Data } from "../../types";
import { PrivateAppState, ZoneType } from "../../types/Internal";
/**
 * Walk the Crezlo state, generate indexes and make modifications to nodes.
 *
 * @param state The initial state
 * @param mapContent A callback to modify the content of a DropZone or slot. Called for all DropZones, slots and the root content.
 * @param mapNodeOrSkip A callback to modify a node. Called for every node in the tree. Returning a node will cause it to be reindexed. Conversely, returning `null` will skip indexing for that node.
 *
 * @returns The updated state
 */
export declare function walkAppState<UserData extends Data = Data>(state: PrivateAppState<UserData>, config: Config, mapContent?: (content: Content, zoneCompound: string, zoneType: ZoneType) => Content | void, mapNodeOrSkip?: (item: ComponentData, path: string[], index: number) => ComponentData | null): PrivateAppState<UserData>;
