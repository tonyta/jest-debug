# Weird Jest Error Rendering

When running tests, the incorrect line gets highlighted. It looks related to
running `installGlobals();` imported from `@remix/node`.

Repro command:
```bash
npm test
```

Expected output:
```
npm test

> test
> jest -- ./test.ts

ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 FAIL  ./test.ts
  ✕ error render example (2 ms)

  ● error render example

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

      2 |
      3 |   expect(true).toBe(true);
    > 4 |   expect(true).toBe(false);
        |                ^
      5 | });
      6 |

      at Object.<anonymous> (test.ts:4:16)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.442 s, estimated 1 s
Ran all test suites matching /.\/test.ts/i.
```

Actual output:
```
npm test

> test
> jest -- ./test.ts

ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 FAIL  ./test.ts
  ✕ error render example (2 ms)

  ● error render example

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

      1 | it('error render example', () => {
      2 |
    > 3 |   expect(true).toBe(true);
        |                  ^
      4 |   expect(true).toBe(false);
      5 | });
      6 |

      at Object.<anonymous> (test.ts:3:18)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.561 s, estimated 1 s
Ran all test suites matching /.\/test.ts/i.
```
