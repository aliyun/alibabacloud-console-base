# @alicloud/typescript-missing-helpers

Supplements to TypeScript type helpers.

```typescript
import {
  PartialPick,
  RequiredPick,
  PartialSelected,
  RequiredSelected,
  PartialUnselected,
  RequiredUnselected,
  PartialBut,
  RequiredBut
} from '@alicloud/typescript-missing-helpers';
```

## PartialPick

Pick properties defined by K from T make them optional.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a?: string;
//   b?: number;
// }
type Alt = PartialPick<Original, 'a' | 'b'>;

// OK
const o1: Alt = { a: '', b: 1 };
const o2: Alt = { a: '' };
const o3: Alt = { b: 1 };
const o4: Alt = {};
// Error: Object literal may only specify known properties...
const o5: Alt = { c: true };
const o6: Alt = { d: new Date };
```

## RequiredPick

Pick properties defined by K from T make them required.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a: string;
//   b: number;
// }
type Alt = RequiredPick<Original, 'a' | 'b'>;

// OK
const o1: Alt = { a: '', b: 1 };
// Error
const o2: Alt = { a: '' }; // missing b
const o3: Alt = { b: 1 }; // missing a
const o4: Alt = {}; // missing a, b
const o5: Alt = { a: '', b: 1, c: true }; // unknown property c
```

## PartialSelected

Make properties defined by K in T optional, the rest untouched.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a?: string;
//   b?: number;
//   c: boolean;
//   d?: Date;
// }
type Alt = PartialSelected<Original, 'a' | 'b'>;

// OK
const o1: Alt = { c: true, d: new Date() };
const o2: Alt = { b: 1, c: true, d: new Date() };
const o3: Alt = { a: '', b: 1, c: true, d: new Date() };
const o4: Alt = { c: true };
// Error
const o5: Alt = { b: 1, d: new Date() }; // missing c
const o6: Alt = { a: '', b: 1 }; // missing c
const o7: Alt = { a: '', b: 1, c: true, d: new Date(), e: null }; // e does not exist
```

## RequiredSelected

Make properties defined by K in T required, the rest untouched.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a: string;
//   b: number;
//   c: boolean;
//   d?: Date;
// }
type Alt = RequiredSelected<Original, 'a' | 'b'>;

// OK
const o1: Alt = { a: '', b: 1, c: false };
const o2: Alt = { a: '', b: 1, c: true, d: new Date() };
// Error
const o3: Alt = { b: 1, c: true, d: new Date() }; // missing a
const o4: Alt = { a: '', b: 1, d: new Date() }; // missing c
const o5: Alt = { a: '', b: 1, c: false, e: null }; // unknown e
```

## PartialUnselected

Properties defined by K in T untouched, the rest made optional.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a?: string;
//   b: number;
//   c?: boolean;
//   d?: Date;
// }
type Alt = PartialUnselected<Original, 'a' | 'b'>;

// OK
const o1: Alt = { b: 1 };
const o2: Alt = { a: '', b: 1, c: false };
// Error
const o3: Alt = { a: '', c: false }; // missing b
```

## RequiredUnselected

Properties defined by K in T untouched, the rest made required.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a?: string;
//   b: number;
//   c: boolean;
//   d: Date;
// }
type Alt = RequiredUnselected<Original, 'a' | 'b'>;

// OK
const o1: Alt = { a: '', b: 1, c: false, d: new Date() };
const o2: Alt = { b: 1, c: false, d: new Date() };
// Error
const o3: Alt = { }; // missing b, c, d
const o4: Alt = { a: '' }; // missing b, c, d
const o5: Alt = { a: '', b: 1 }; // missing c, d
const o6: Alt = { a: '', b: 1, c: false }; // missing d
```

## PartialBut

Properties defined by K in T required, the rest made optional.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a: string;
//   b: number;
//   c?: boolean;
//   d?: Date;
// }
type Alt = PartialBut<Original, 'a' | 'b'>;

// OK
const o1: Alt = { a: '', b: 1 }; // missing c, d
const o2: Alt = { a: '', b: 1, c: false }; // missing d
const o3: Alt = { a: '', b: 1, d: new Date() }; // missing c
const o4: Alt = { a: '', b: 1, c: false, d: new Date() };
// Error
const o5: Alt = { b: 1, c: false, d: new Date() }; // missing a
const o6: Alt = { c: false, d: new Date() }; // missing a, b
const o7: Alt = { a: '' }; // missing b
const o8: Alt = { }; // missing a, b
```

## RequiredBut

Properties defined by K in T optional, the rest made required.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d?: Date;
}

// Alt === {
//   a?: string;
//   b?: number;
//   c: boolean;
//   d: Date;
// }
type Alt = RequiredBut<Original, 'a' | 'b'>;

// OK
const o1: Alt = { a: '', b: 1, c: false, d: new Date() };
const o2: Alt = { b: 1, c: false, d: new Date() };
const o3: Alt = { c: false, d: new Date() };
// Error
const o4: Alt = { }; // missing c, d
const o5: Alt = { a: '' }; // missing c, d
const o6: Alt = { a: '', b: 1 }; // missing c, d
const o7: Alt = { a: '', b: 1, c: false }; // missing d
const o8: Alt = { a: '', b: 1, d: new Date() }; // missing c
```
