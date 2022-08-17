export default function walk(slow = false, fast = false) {
  if (slow) {
    console.log("walking slowly...");
  } else if (fast) {
    console.log("walking fast...");
  } else {
    console.log("walking...");
  }
}
