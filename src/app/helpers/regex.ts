/**
 * File of regular expressions for validating fields
 */

export const RGX = {
    CURP: /^[a-zA-Z]{4}[\d]{6}(H|M)[a-zA-Z]{5}[\d]{2}$/,
    RFC: /^[a-zA-Z]{3,4}[\d]{6}[a-zA-Z0-9]{3}$/
};