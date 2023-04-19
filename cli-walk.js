import meow from "meow";
import walk from "./lib/walk.js";

const options = {
  importMeta: import.meta,
  flags: {
    slow: { type: "boolean", alias: "s" },
    fast: { type: "boolean", alias: "f" },
    help: { type: "boolean", alias: "h" },
  },
};

const cli = meow(
  `
  Usage
    $ meow walk

  Options
    --slow, -s    walk slowly
    --fast, -f    walk fast
    --help, -h    show help
`,
  options
);

if (cli.flags.help) {
  cli.showHelp();
}

walk(cli.flags.slow, cli.flags.fast);
