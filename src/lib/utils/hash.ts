export async function sha512(data: string) {
  
  const dataEncoded = new TextEncoder().encode(data);

  const hashArrayBuffer = (await crypto.subtle.digest("SHA-512", dataEncoded))
  
  const hashArray = Array.from(new Uint8Array(hashArrayBuffer)); // convert buffer to byte array
  
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  
  return hashHex;
  
}