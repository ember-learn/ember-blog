---
title: 'Security Releases: Ember 4.8.1, 4.4.4, 3.28.10, 3.24.7'
authors:
  - edward-faulkner
date: 2022-11-02T00:00:00.000Z
tags:
  - '2022'
  - releases
  - security

---

*Updates 2026-01-30: This security fix was also backported to 2.18.3 so that legacy apps on the 2.x major series can also benefit. No CVE number was ever issued to us for this issue.*

Today we are releasing Ember.js 3.24.7, 3.28.10, 4.4.4, 4.8.1, and 4.9.0-beta.3 to patch a security vulnerability.  *A CVE number is pending and this post will be updated to include it once it's been issued.*

Apps that pass untrusted input as paths to `EmberObject.setProperties` or `EmberObject.set`, or the corresponding standalone functions `setProperties` or `set`, may get surprising results that, in combination with other application bugs, could lead to cross-site scripting vulnerabilities.

```js
import EmberObject from '@ember/object';

let o = new EmberObject();

// This can lead to prototype pollution in unpatched Ember versions
o.set(untrustedPath, untrustedValue);

// This can lead to prototype pollution in unpatched Ember versions
o.setProperties({ [untrustedPath]: untrustedValue });
```

These methods were vulnerable to [Prototype Pollution](https://learn.snyk.io/lessons/prototype-pollution/javascript/), meaning an attacker can set paths like `__proto__.__proto__.isAdmin` to mutate unexpected objects, including Javascript intrinsics like the global `Object`. Depending on the specifics of your application, this can be leveraged as part of an attack to steal user credentials.

While deep property chaining is an intended feature of these APIs, and passing untrusted input to them is ill-advised, we agree that that this behavior is surprising enough to constitute an increased security risk. So this release forbids chaining any `set` or `setProperties` through `__proto__` or `constructor`.

Apps on unsupported releases that cannot immediately upgrade should audit their usage of `setProperties` and `set` to ensure they are not allowing users to control the paths.

Thanks to [Masato Kinugawa](https://twitter.com/kinugawamasato) for finding and reporting this issue.
