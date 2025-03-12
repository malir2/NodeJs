// Creating a buffer from the string "Code"
const buffer = new Buffer.from("Code");
// The buffer size is automatically set based on the length of the string "Code" (4 bytes).

// Writing the string "Codders" into the buffer
buffer.write("Codders");
// Since the original buffer was created with 4 bytes, only the first 4 characters of "Codders" ("Codd") will be written.
// The remaining characters ("ers") are ignored due to insufficient space.

// Logging the buffer object
console.log(buffer);
// This prints the raw buffer object, showing the binary representation of the stored data.

// Logging the buffer content in JSON format
console.log(buffer.toJSON());
// Converts the buffer to a JSON object and prints an array of byte values (ASCII codes).
// Example output: { type: 'Buffer', data: [ 67, 111, 100, 100 ] }
// 67 -> 'C', 111 -> 'o', 100 -> 'd', 100 -> 'd'

// Logging the buffer content as a string
console.log(buffer.toString());
// Converts the buffer content back to a string and prints it.
// Output will be "Codd" because only the first 4 bytes were written.
