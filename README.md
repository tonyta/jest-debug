# Weird Jest Error Rendering

When running tests, the incorrect line gets highlighted. It looks related to
running `installGlobals();` imported from `@remix/node`.

Repro command:
```bash
npx jest
```

Expected output:
```
npx jest
 FAIL  ./test.js
  ✕ error render example (2 ms)

  ● error render example

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

      3 | it('error render example', () => {
      4 |   expect(true).toBe(true);
    > 5 |   expect(true).toBe(false);
        |                ^
      6 | });
      7 |

      at Object.toBe (test.js:5:16)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.117 s, estimated 1 s
Ran all test suites.
```

Actual output:
```
npx jest
 FAIL  ./test.js
  ✕ error render example (2 ms)

  ● error render example

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true

      2 |
      3 | it('error render example', () => {
    > 4 |   expect(true).toBe(true);
        |                ^
      5 |   expect(true).toBe(false);
      6 | });
      7 |

      at Object.<anonymous> (test.js:4:16)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.147 s, estimated 1 s
Ran all test suites.
```
