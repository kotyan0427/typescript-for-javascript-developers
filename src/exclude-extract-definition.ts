export {};

type Debug = () => void;
type SomeTypes = string | number | Debug;

type Extract = string | number;
type StringAndNumberTypes = Extract;

type NullableTypes = string | number | null | undefined;

type NonNullableTypes = NonNullable;
type NonNullable = string | number;
