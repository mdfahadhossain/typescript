'Hello'.charAt(1); // 'e'

'Hello'.charAt(-1); // ''

'Hello'.charAt(20); // ''

/*
1. Negative indexing support.
2. Returns undefined instead of empty string.
*/

'Hello'.at(1); // 'e'

'Hello'.at(-1); // 'o'
'Hello'.at(-5); // 'H'
'Hello'.at(-50); // undefined

'Hello'.at(30); // undefined
