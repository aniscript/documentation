// Function to fetch data with delay
async function fetchWithDelay(url) {
  const response = await fetch(url);
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
}

// Function to fetch documents
export async function fetchDocuments() {
  return fetchWithDelay("/data/documents.json");
}

// Function to fetch documents by id
export async function fetchDocumentById(id) {
  const documents = await fetchWithDelay("/data/documents.json");
  return documents[id];
}

// Function to fetch chapter contents from documents
export async function fetchChapterContent(chapterFile) {
  const response = await fetch(`/data/storage/${chapterFile}`);
  const content = await response.text();
  if (!content || content.includes("html")) throw new Error("Bad Request");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return content;
}
