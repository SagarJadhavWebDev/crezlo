type OptionsObj = Record<string, any>;
type Options = string | OptionsObj;
export declare const getGlobalClassName: (rootClass: string, options: Options) => string;
declare const getClassNameFactory: (rootClass: string, styles: Record<string, string>, config?: {
    baseClass?: string;
}) => (options?: Options) => string;
export default getClassNameFactory;
