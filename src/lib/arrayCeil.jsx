
export default function arrayCeil(arr, number) {
    const sorted = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            console.log("HERE IS WHAT IT SORTED" + sorted[i]);
            return sorted[i];
        }
    }
    // If no index found return the last element
    console.log(sorted[sorted.length - 1]);
    return sorted[sorted.length - 1];
}
