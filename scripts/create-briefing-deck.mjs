import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';
import { buildBriefingDeck, fileStem } from '../src/sample-documents.mjs';

const [title = 'OfficeMaker for Pipedream', subtitle = 'Starter action demo'] = process.argv.slice(2);

const documentObject = buildBriefingDeck({ title, subtitle });
const result = await createDocument({
  documentType: 'powerpoint',
  fileName: `${fileStem(title)}-pipedream-deck`,
  documentObject
});

printCreateSummary(result);
