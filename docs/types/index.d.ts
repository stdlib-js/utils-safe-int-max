/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Returns the maximum safe integer capable of being represented by a numeric real type.
*
* ## Notes
*
* The following numeric real types are supported:
*
* -   `float64`: double-precision floating-point numbers
* -   `float32`: single-precision floating-point numbers
* -   `float16`: half-precision floating-point numbers
*
* @param dtype - numeric type
* @throws must provide a recognized numeric type
* @returns maximum safe integer
*
* @example
* var m = safeintmax( 'float64' );
* // returns 9007199254740991
*
* @example
* var m = safeintmax( 'float16' );
* // returns 2047
*
* @example
* var m = safeintmax( 'float32' );
* // returns 16777215
*/
declare function safeintmax( dtype: string ): number;


// EXPORTS //

export = safeintmax;
