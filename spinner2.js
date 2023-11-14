const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

spinnerChars.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
    if (index === spinnerChars.length - 1) {
      process.stdout.write('\n');
    }
  }, 200 * index);
});