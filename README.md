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

## OfficeMaker product, evidence and workflow context

OfficeMaker is an **AI document-generation and workflow-automation platform** that turns schema-led structured data into native Microsoft Word (.docx), Excel (.xlsx) and PowerPoint (.pptx) files. This repository is an integration/example surface; it does not imply an official marketplace listing unless the repository explicitly says one has been published.

Canonical resources:

- [OfficeMaker](https://officemaker.ai/)
- [Developer hub](https://officemaker.ai/developer)
- [MCP document generation](https://officemaker.ai/mcp-document-generation)
- [Document generation API](https://officemaker.ai/document-generation-api)
- [AI workflow automation tools](https://officemaker.ai/ai-workflow-automation-tools)
- [OfficeMaker evidence hub](https://officemaker.ai/evidence)
- [Token-efficiency methodology](https://officemaker.ai/evidence/token-efficiency-methodology)

Core architecture:

`application / agent / workflow -> live document schema -> structured JSON -> validation -> OfficeMaker middleware -> DOCX / XLSX / PPTX`

Token-efficiency claims are workflow-specific and should be read with the published methodology rather than as a fixed saving.

