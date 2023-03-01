<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# safeintmax

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the maximum safe integer capable of being represented by a numeric real type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-safe-int-max
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var safeintmax = require( '@stdlib/utils-safe-int-max' );
```

#### safeintmax( dtype )

Returns the maximum **safe** integer capable of being represented by a numeric **real** type.

```javascript
var m = safeintmax( 'float64' );
// returns 9007199254740991
```

The following numeric **real** types are supported:

-   `float64`: double-precision floating-point numbers
-   `float32`: single-precision floating-point numbers
-   `float16`: half-precision floating-point numbers

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var safeintmax = require( '@stdlib/utils-safe-int-max' );

var m = safeintmax( 'float64' );
// returns 9007199254740991

m = safeintmax( 'float32' );
// returns 16777215

m = safeintmax( 'float16' );
// returns 2047
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/utils-safe-int-max-cli
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

### Usage

```text
Usage: safeintmax [options] <dtype>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ safeintmax float16
2047
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-safe-int-min`][@stdlib/utils/safe-int-min]</span><span class="delimiter">: </span><span class="description">return the minimum safe integer capable of being represented by a numeric real type.</span>
-   <span class="package-name">[`@stdlib/utils-real-max`][@stdlib/utils/real-max]</span><span class="delimiter">: </span><span class="description">return the maximum finite value capable of being represented by a numeric real type.</span>
-   <span class="package-name">[`@stdlib/utils-type-max`][@stdlib/utils/type-max]</span><span class="delimiter">: </span><span class="description">return the maximum value of a specified numeric type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-safe-int-max.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-safe-int-max

[test-image]: https://github.com/stdlib-js/utils-safe-int-max/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-safe-int-max/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-safe-int-max/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-safe-int-max?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-safe-int-max.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-safe-int-max/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/utils-safe-int-max#cli
[cli-url]: https://github.com/stdlib-js/utils-safe-int-max/tree/cli
[@stdlib/utils-safe-int-max]: https://github.com/stdlib-js/utils-safe-int-max/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-safe-int-max/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-safe-int-max/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-safe-int-max/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-safe-int-max/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-safe-int-max/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/safe-int-min]: https://github.com/stdlib-js/utils-safe-int-min

[@stdlib/utils/real-max]: https://github.com/stdlib-js/utils-real-max

[@stdlib/utils/type-max]: https://github.com/stdlib-js/utils-type-max

<!-- </related-links> -->

</section>

<!-- /.links -->
