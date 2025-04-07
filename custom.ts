/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace pxt_makecode_extension_test {
    //% block
    export function add() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function addTogether(a:number, b:number) : number {
        return (a + b);
    }
}