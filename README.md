# Incorrect use of $inc operator in MongoDB update operation
This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation.  The `$inc` operator is used to increment a numerical field.  Providing a string value will result in an error or unexpected behavior. The correct way to use the operator is to provide a numerical value.

## Bug:
The provided code attempts to increment the `count` field by "10" (a string), which is invalid.  MongoDB expects a number for the `$inc` operation.

## Solution:
The solution corrects the code to increment the `count` field by 10 (a number).