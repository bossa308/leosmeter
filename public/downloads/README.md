# Downloads

Drop product PDFs here. Filenames must match the `filename` field in
[`src/data/downloads.ts`](../../src/data/downloads.ts) and in each product's
`downloads[]` array in [`src/data/products.ts`](../../src/data/products.ts).

Naming convention: `<MODEL>-<DocType>-<LANG>.pdf` — e.g. `PQM510-Manual-TH.pdf`.

The Download Center automatically detects which files are present at build time
and replaces missing ones with a "ขอเอกสาร" button that points to the contact
page.
