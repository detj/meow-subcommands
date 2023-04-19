import meow from "meow";
import run from "./lib/run.js";

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
    $ meow run

  Options
    --slow, -s    run slowly
    --fast, -f    run fast
    --help, -h    show help
`,
  options
);

if (cli.flags.help) {
  cli.showHelp();
}

run(cli.flags.slow, cli.flags.fast);
