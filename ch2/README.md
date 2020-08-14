# ch2
```bash
$ cd ~/ghq/github.com/kotaoue/PracticeForGitHubActions/ch2/
$ npm test

> fizz-buzz@1.0.0 test /Users/kota.oue/ghq/github.com/kotaoue/PracticeForGitHubActions/ch2
> mocha



  0 passing (1ms)

# change if to it on test/index.js
$ npm test

> fizz-buzz@1.0.0 test /Users/kota.oue/ghq/github.com/kotaoue/PracticeForGitHubActions/ch2
> mocha



  fizzbuzz
    1) returns FizzBuzz when value is divisible by 15
    2) returns Fizz when value is divisible by 3
    3) returns Buzz when value is divisible by 5
    4) returns the value when value is not divisible by 3 or 5


  0 passing (4ms)
  4 failing

  1) fizzbuzz
       returns FizzBuzz when value is divisible by 15:
     TypeError: fizzbuzz is not a function
      at Context.<anonymous> (test/index.js:6:16)
      at processImmediate (internal/timers.js:456:21)

  2) fizzbuzz
       returns Fizz when value is divisible by 3:
     TypeError: fizzbuzz is not a function
      at Context.<anonymous> (test/index.js:10:16)
      at processImmediate (internal/timers.js:456:21)

  3) fizzbuzz
       returns Buzz when value is divisible by 5:
     TypeError: fizzbuzz is not a function
      at Context.<anonymous> (test/index.js:14:16)
      at processImmediate (internal/timers.js:456:21)

  4) fizzbuzz
       returns the value when value is not divisible by 3 or 5:
     TypeError: fizzbuzz is not a function
      at Context.<anonymous> (test/index.js:18:16)
      at processImmediate (internal/timers.js:456:21)



npm ERR! Test failed.  See above for more details.

# change module.export to module.exports on index.js
$ npm test

> fizz-buzz@1.0.0 test /Users/kota.oue/ghq/github.com/kotaoue/PracticeForGitHubActions/ch2
> mocha



  fizzbuzz
    ✓ returns FizzBuzz when value is divisible by 15
    ✓ returns Fizz when value is divisible by 3
    ✓ returns Buzz when value is divisible by 5
    ✓ returns the value when value is not divisible by 3 or 5


  4 passing (4ms)
```
