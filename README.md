# OfficeMaker Pipedream Actions

Starter repository for Pipedream actions that call the public OfficeMaker free API at `https://free.officemaker.ai`.

## What is included

- a lightweight OfficeMaker client in `src/officemaker-client.mjs`
- sample builders for Word, Excel, and PowerPoint payloads
- runnable local scripts in `scripts/`
- a starter Pipedream action in `pipedream/actions/create-document.mjs`

## Quick start

```bash
npm run create:letter
npm run create:quote
npm run create:deck
```

## First platform story

This repo is aimed at code-first and event-driven scenarios:

- webhook or event arrives
- a workflow builds `document_json`
- OfficeMaker returns a downloadable file

## Next build steps

1. Split the single starter action into separate Word, Excel, and PowerPoint actions if needed.
2. Add schema lookup helpers for safer payload construction.
3. Add end-to-end event source examples.
