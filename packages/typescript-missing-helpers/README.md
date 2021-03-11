@alicloud/typescript-missing-helpers
===

```typescript
import {
  PartialPick,
  RequiredPick,
  PartialSome, // TODO RequiredSome
  PartialBut,
  RequiredBut
} from '@alicloud/typescript-missing-helpers';
```

# PartialPick

Pick only chosen properties from an existing type and make them optional.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d: Date;
}
 
type Alt = PartialPick<Original, 'a' | 'b'>;
 
// OK
const ex1: Alt = { a: '', b: 1 };
const ex2: Alt = { a: '' };
const ex3: Alt = { b: 1 };
const ex4: Alt = {};
 
// Error: Object literal may only specify known properties...
const ex5: Alt = { c: true };
const ex6: Alt = { d: new Date };
```

# RequiredPick

Pick only chosen properties from an existing type and make them required.

```typescript
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d: Date;
}
 
type Alt = RequiredPick<Original, 'a' | 'b'>;
 
// OK
const ex1: Alt = { a: '', b: 1 };
 
// Error
const ex2: Alt = { a: '' }; // missing b
const ex3: Alt = { b: 1 }; // missing a
const ex4: Alt = {}; // missing a, b
const ex5: Alt = { a: '', b: 1, c: true }; // unknown property c
```

# PartialSome

Convert only chosen properties to optional, others left untouched.

```
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d: Date;
}
 
type Alt = PartialSome<Original, 'a' | 'b'>;
 
// OK
const ex1: Alt = { c: true, d: new Date() };
const ex2: Alt = { b: 1, c: true, d: new Date() };
const ex3: Alt = { a: '', b: 1, c: true, d: new Date() };
 
// Error
const ex5: Alt = { c: true }; // missing d
const ex6: Alt = { b: 1, d: new Date() }; // missing c
const ex7: Alt = { a: '', b: 1 }; // missing c, d
const ex8: Alt = { a: '', b: 1, c: true, d: new Date(), e: null }; // e does not exist
```

# PartialBut

Convert ALL properties but chosen ones to optional, the selected ones might be optional or required according to its original type.

```
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d: Date;
}
type Alt = PartialBut<Original, 'a' | 'b'>;
 
const original: Original = {}; // Error: Missing b, c, d
const changed: Alt = {}; // Error: Missing b
```

# RequiredBut

Convert ALL properties but selected ones to required, the selected ones might be optional or required according to its original type.

```
interface Original {
  a?: string;
  b: number;
  c: boolean;
  d: Date;
}
type Alt = RequiredBut<Original, 'a' | 'b'>;
 
const original: Original = {}; // Error: Missing b, c, d
const changed: Alt = {}; // Error: Missing c, d
```
