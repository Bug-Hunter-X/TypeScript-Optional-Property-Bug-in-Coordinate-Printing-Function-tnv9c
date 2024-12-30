# TypeScript Optional Property Handling Bug

This repository demonstrates a common, yet subtle, bug in TypeScript related to optional properties in object types. The `printCoord` function expects an object with both `x` and `y` coordinates, but doesn't explicitly handle cases where either property might be missing. This can lead to runtime errors if the function is called with an incomplete object.

The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides a corrected version that gracefully handles missing properties.

## Bug Description

The original `printCoord` function assumes both `x` and `y` are always present.  If called with an object missing either property, a runtime error will occur. This violates the principle of defensive programming and can make debugging more difficult.

## Solution

The solution utilizes optional properties (`?`) in the type definition to explicitly indicate that `x` and `y` are optional.  Additionally, it includes checks to ensure that these properties exist before using them.  This approach prevents runtime errors and enhances code robustness.