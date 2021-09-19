let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
  }, Math.abs(i * 200 - 100));
}
