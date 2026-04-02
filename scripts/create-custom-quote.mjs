import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';
import { buildCustomQuote, fileStem } from '../src/sample-documents.mjs';

const [customerName = 'Northwind Traders', productName = 'OfficeMaker Event Pack', quantityArg = '12', unitPriceArg = '69'] =
  process.argv.slice(2);

const quantity = Number(quantityArg);
const unitPrice = Number(unitPriceArg);

const documentObject = buildCustomQuote({ customerName, productName, quantity, unitPrice });
const result = await createDocument({
  documentType: 'excel',
  fileName: `${fileStem(customerName)}-pipedream-quote`,
  documentObject
});

printCreateSummary(result);
