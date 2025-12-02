from fastapi import FastAPI, Request
from pydantic import BaseModel
import uvicorn
import os
import re
import pathlib

# Define the path to your Docusaurus docs directory
DOCS_PATH = pathlib.Path(__file__).parent.parent / "docs"

# Placeholder for LLM integration and content indexing
# In a real implementation, you would load your vector database and LLM here

documents = []

def load_documents():
    for fpath in DOCS_PATH.rglob("*.mdx"):
        content = fpath.read_text(encoding="utf-8")
        # Simple cleaning: remove markdown code blocks and then other markdown
        content = re.sub(r"```.*?```", "", content, flags=re.DOTALL)
        content = re.sub(r"<!--.*?-->", "", content, flags=re.DOTALL) # Remove HTML comments
        content = re.sub(r"^#+\s.*$", "", content, flags=re.MULTILINE) # Remove markdown headers
        content = re.sub(r"\[(.*?)\]\(.*?\)","", content) # Remove markdown links
        content = re.sub(r"\*\*|__|\*|_|`", "", content) # Remove bold, italics, inline code
        content = re.sub(r"^\s*\d+\s*→\s*", "", content, flags=re.MULTILINE) # Remove "cat -n" line numbers
        content = re.sub(r"\\n", "\\n", content) # Unescape \\n
        content = content.replace("\\n", " ")
        content = re.sub(r"\\", "", content) # Remove any remaining backslashes from path-like strings

        # Remove extra spaces and newlines
        content = re.sub(r'\\s+', ' ', content).strip()

        documents.append({"filepath": str(fpath.relative_to(DOCS_PATH)), "content": content})
    print(f"Loaded {len(documents)} documents.")

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    load_documents()

def search_documents(query: str):
    results = []
    query_keywords = [word.lower() for word in query.split() if len(word) > 2] # Ignore short words

    if not query_keywords:
        return "Please provide a more specific query with keywords."

    for doc in documents:
        for keyword in query_keywords:
            if keyword in doc["content"].lower():
                # Extract a relevant snippet around the keyword
                snippet_start = max(0, doc["content"].lower().find(keyword) - 100)
                snippet_end = min(len(doc["content"]), doc["content"].lower().find(keyword) + 200)
                snippet = doc["content"][snippet_start:snippet_end]
                results.append(f"**Source:** {doc["filepath"]}\n...{snippet.strip()}...\n")
                break # Only add one snippet per document per query keyword

    if results:
        return "\n".join(results)
    else:
        return "I couldn't find relevant information in the documentation. Please try rephrasing your question."

class Query(BaseModel):
    query: str

@app.post("/api/chatbot")
async def chatbot_endpoint(query: Query):
    response_text = search_documents(query.query)
    return {"response": response_text}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
