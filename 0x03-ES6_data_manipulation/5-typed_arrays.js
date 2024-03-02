#!/usr/bin/node
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;
  const object = {
	byteLength: 10,
	byteOffset: 0,
	buffer
  }
  return object;
}
