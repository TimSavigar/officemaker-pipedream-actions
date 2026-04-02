import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';
import { buildAiLetter, fileStem } from '../src/sample-documents.mjs';

const [recipientName = 'Alicia Brown', companyName = 'OfficeMaker', purpose = 'follow up after a webhook trigger'] =
  process.argv.slice(2);

const documentObject = buildAiLetter({ recipientName, companyName, purpose });
const result = await createDocument({
  documentType: 'word',
  fileName: `${fileStem(recipientName)}-pipedream-letter`,
  documentObject
});

printCreateSummary(result);
