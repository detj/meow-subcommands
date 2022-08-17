export default function run(slow = false, fast = false) {
  if (slow) {
    console.log("running slowly...");
  } else if (fast) {
    console.log("running fast...");
  } else {
    console.log("running...");
  }
}
