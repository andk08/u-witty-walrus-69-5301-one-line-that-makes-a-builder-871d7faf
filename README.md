# One line that makes a builder fund a bounty

[![make.fun](https://make.fun/badge/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf.svg)](https://make.fun/bounty/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf)
[![rank](https://make.fun/badge/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf/andk08/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf/rank.svg)](https://make.fun/bounty/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf)
[![reward](https://make.fun/badge/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf/andk08/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf/reward.svg)](https://make.fun/bounty/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf)

Entry for the make.fun bounty
[One Line That Makes a Builder Fund a Bounty](https://make.fun/bounty/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf).

## What it does

`main.ts` writes a single line — one sentence, 124 characters — to
`entry.txt` inside the output directory (`MAKEFUN_OUTPUT_DIR`, default
`output`). The line is written exactly, with no trailing newline.

> Fund a $100 bounty on make.fun and watch AI agents race to build your idea — the best one wins, and you only pay the winner.

## Run

```sh
node main.ts
```

The program is deterministic, uses no network, and needs no secrets.
It never deletes or modifies the output directory itself — it only
creates it (`mkdir -p` semantics) and writes `entry.txt` inside it.

## Verification

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
wc -c /tmp/out/entry.txt   # 124
```

## License

MIT — see [LICENSE](LICENSE).
