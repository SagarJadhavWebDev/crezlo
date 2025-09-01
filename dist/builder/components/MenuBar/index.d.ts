import { Dispatch, ReactElement, SetStateAction } from "react";
import { CrezloAction } from "../../reducer";
import type { Data } from "../../types";
export declare function MenuBar<UserData extends Data>({ menuOpen, renderHeaderActions, setMenuOpen, }: {
    dispatch: (action: CrezloAction) => void;
    onPublish?: (data: UserData) => void;
    menuOpen: boolean;
    renderHeaderActions?: () => ReactElement;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}): import("react/jsx-runtime").JSX.Element;
