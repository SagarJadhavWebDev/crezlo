import { Config, Data, DefaultComponentProps, DefaultRootFieldProps } from "../types";
type PropTransform<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultRootFieldProps> = Partial<{
    [ComponentName in keyof Props]: (props: Props[ComponentName] & {
        [key: string]: any;
    }) => Props[ComponentName];
} & {
    root: (props: RootProps & {
        [key: string]: any;
    }) => RootProps;
}>;
export declare function transformProps<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultRootFieldProps>(data: Partial<Data>, propTransforms: PropTransform<Props, RootProps>, config?: Config): Data;
export {};
