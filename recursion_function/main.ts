const arr: number[] = [2, 34, 45, 23, 4];

function normal_action(arr: number[]) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
  }

  return res;
};

// const result = normal_action(arr);

function recursion_f(arr: number[]): number {
  if (arr.length !== 0) {
    const [head, ...rest] = arr;

    return head + recursion_f(rest);
  }
  return 0;
}

const recursionResult = recursion_f(arr);

console.log(recursionResult);
