#!/usr/bin/env node

import meow from "meow";

const options = {
  importMeta: import.meta,
  flags: {
    help: { type: "boolean", alias: "h" },
    version: { type: "boolean", alias: "v" },
  },
};

const cli = meow(
  `
  Usage
    $ meow <command>

  Commands
    walk            walk while meowing
    run             run while meowing

  Options
    --help, -h      show help
    --version, -v   show version
`,
  options
);

switch (cli.input[0]) {
  case "walk":
    await import("./cli-walk.js");
    break;
  case "run":
    await import("./cli-run.js");
    break;
  default:
    cli.showHelp(1);
}
