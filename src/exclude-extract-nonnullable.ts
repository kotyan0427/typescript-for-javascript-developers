export {};

type Debug = () => void;
type SomeTypes = string | number | Debug;

type NonFunctionType = Exclude<SomeTypes, Debug>;

type OnlyFunctionType = Extract<SomeTypes, Debug>;

type NullableTypes = string | number | null | undefined;

type NonNullAndUndefined = NonNullable<NullableTypes>;
