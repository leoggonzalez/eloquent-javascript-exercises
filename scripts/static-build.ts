import copydir from "copy-dir";

(() => {
  copydir("./src/public", "./build/public", {}, function (err: Error) {
    if (err) throw err;
  });
  copydir("./src/shared", "./build/shared", {}, function (err: Error) {
    if (err) throw err;
  });
  copydir("./src/views", "./build/views", {}, function (err: Error) {
    if (err) throw err;
  });
})();
