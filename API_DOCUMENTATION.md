# Chat Mock - API Documentation

## 📡 Base URL

**Development:** `http://localhost:5000`  
**Production:** `https://your-deployed-api.com`

## 🔑 API Endpoints

### 1. Health Check

**Endpoint:** `GET /api/health`

**Description:** Verify that the API is running

**Response:**
```json
{
  "status": "Server is running"
}
```

---

## 💬 Chat Session APIs

### 2. Create New Chat Session

**Endpoint:** `POST /api/chat/sessions/new`

**Description:** Create a new chat session with a unique session ID

**Request Body:**
```json
{}
```

**Response:**
```json
{
  "sessionId": "sess-1731669504123-abc123xyz",
  "title": "New Chat",
  "createdAt": "2025-11-15T10:00:00Z",
  "updatedAt": "2025-11-15T10:00:00Z",
  "messages": []
}
```

**Status Codes:**
- `200` - Session created successfully
- `500` - Server error

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/chat/sessions/new
```

---

### 3. Get All Sessions

**Endpoint:** `GET /api/chat/sessions`

**Description:** Retrieve list of all chat sessions

**Response:**
```json
[
  {
    "sessionId": "sess-001",
    "title": "React Best Practices",
    "createdAt": "2025-11-15T10:00:00Z",
    "updatedAt": "2025-11-15T10:30:00Z"
  },
  {
    "sessionId": "sess-002",
    "title": "JavaScript Performance",
    "createdAt": "2025-11-14T15:20:00Z",
    "updatedAt": "2025-11-14T16:00:00Z"
  }
]
```

**Status Codes:**
- `200` - Sessions retrieved successfully
- `500` - Server error

**Example cURL:**
```bash
curl -X GET http://localhost:5000/api/chat/sessions
```

---

### 4. Get Session History

**Endpoint:** `GET /api/chat/sessions/:sessionId/history`

**Description:** Retrieve complete chat history for a specific session

**Parameters:**
- `sessionId` (path): Unique session identifier

**Response:**
```json
{
  "sessionId": "sess-001",
  "messages": [
    {
      "messageId": "msg-001",
      "question": "What are the best practices for React components?",
      "answer": "React best practices include proper component composition, memoization, avoiding prop drilling, and using hooks correctly.",
      "tableData": [
        {
          "practice": "Use Functional Components",
          "description": "Modern approach over class components",
          "importance": "High"
        }
      ],
      "timestamp": "2025-11-15T10:05:00Z",
      "feedback": null
    }
  ]
}
```

**Status Codes:**
- `200` - History retrieved successfully
- `500` - Server error

**Example cURL:**
```bash
curl -X GET http://localhost:5000/api/chat/sessions/sess-001/history
```

---

## 💬 Chat Messages APIs

### 5. Ask a Question

**Endpoint:** `POST /api/chat/sessions/:sessionId/ask`

**Description:** Submit a question in a chat session and receive a response

**Parameters:**
- `sessionId` (path): Unique session identifier

**Request Body:**
```json
{
  "question": "What are the best practices for React components?"
}
```

**Response:**
```json
{
  "messageId": "msg-003",
  "question": "What are the best practices for React components?",
  "answer": "React best practices include proper component composition, memoization, avoiding prop drilling, and using hooks correctly.",
  "tableData": [
    {
      "practice": "Use Functional Components",
      "description": "Modern approach over class components",
      "importance": "High"
    },
    {
      "practice": "Memoization",
      "description": "Prevent unnecessary re-renders with React.memo",
      "importance": "High"
    }
  ],
  "timestamp": "2025-11-15T10:15:00Z",
  "feedback": null
}
```

**Status Codes:**
- `200` - Question processed successfully
- `400` - Missing or invalid question
- `500` - Server error

**Validation:**
- `question` must not be empty
- `question` must be a string

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/chat/sessions/sess-001/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "What is React?"}'
```

---

### 6. Submit Answer Feedback

**Endpoint:** `POST /api/chat/sessions/:sessionId/feedback`

**Description:** Submit like/dislike feedback for a chat message

**Parameters:**
- `sessionId` (path): Unique session identifier

**Request Body:**
```json
{
  "messageId": "msg-001",
  "feedback": "like"
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "msg-001",
  "feedback": "like",
  "message": "Feedback recorded: like"
}
```

**Status Codes:**
- `200` - Feedback submitted successfully
- `400` - Invalid feedback value
- `500` - Server error

**Validation:**
- `feedback` must be either `"like"` or `"dislike"`
- `messageId` must be provided

**Valid Feedback Values:**
- `like` - User found the answer helpful
- `dislike` - User did not find the answer helpful

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/chat/sessions/sess-001/feedback \
  -H "Content-Type: application/json" \
  -d '{"messageId": "msg-001", "feedback": "like"}'
```

---

## 📊 Response Data Structures

### Message Object

```typescript
{
  messageId: string;           // Unique message identifier
  question: string;            // User's question
  answer: string;              // AI's response
  tableData: TableRow[];       // Structured table data
  timestamp: string;           // ISO 8601 timestamp
  feedback: "like" | "dislike" | null;  // User's feedback
}
```

### TableRow Object (Dynamic)

Table rows are dynamic and can contain any key-value pairs depending on the response type:

```typescript
{
  [key: string]: string | number;  // Variable columns
}
```

Example:
```json
{
  "feature": "Virtual DOM",
  "description": "Improves rendering performance",
  "status": "Core Feature"
}
```

### Session Object

```typescript
{
  sessionId: string;           // Unique session identifier
  title: string;               // Session title/name
  createdAt: string;           // ISO 8601 creation timestamp
  updatedAt: string;           // ISO 8601 last update timestamp
}
```

---

## 🔄 Complete Example Flow

### 1. Start a New Session
```bash
curl -X POST http://localhost:5000/api/chat/sessions/new
```

Response: `sessionId = "sess-1731669504123-abc123xyz"`

### 2. Ask a Question
```bash
curl -X POST http://localhost:5000/api/chat/sessions/sess-1731669504123-abc123xyz/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "What is React?"}'
```

Response: Message with answer and table data

### 3. Submit Feedback
```bash
curl -X POST http://localhost:5000/api/chat/sessions/sess-1731669504123-abc123xyz/feedback \
  -H "Content-Type: application/json" \
  -d '{"messageId": "msg-001", "feedback": "like"}'
```

Response: Feedback confirmation

### 4. Retrieve History
```bash
curl -X GET http://localhost:5000/api/chat/sessions/sess-1731669504123-abc123xyz/history
```

Response: All messages in session

---

## ⚠️ Error Handling

### Error Response Format

```json
{
  "error": "Error message describing what went wrong"
}
```

### Common Errors

| Status | Error | Cause |
|--------|-------|-------|
| 400 | "Question is required" | Empty or missing question |
| 400 | "Invalid feedback" | Feedback not "like" or "dislike" |
| 500 | "Failed to create session" | Server error |
| 500 | "Failed to process question" | Server error during processing |
| 500 | "Failed to load sessions" | Error reading sessions file |

---

## 🔐 CORS Configuration

Cross-Origin Resource Sharing is enabled for all origins:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

## 📈 Rate Limiting

Currently, there is no rate limiting implemented. For production, consider adding rate limiting middleware.

---

## 🔄 Pagination

Currently, all endpoints return complete datasets. For large datasets, consider implementing pagination with `limit` and `offset` parameters.

---

## 🧪 Testing Endpoints

### Using Postman

1. Create a new collection
2. Import these endpoints:
   - POST `{{baseUrl}}/chat/sessions/new`
   - GET `{{baseUrl}}/chat/sessions`
   - GET `{{baseUrl}}/chat/sessions/:sessionId/history`
   - POST `{{baseUrl}}/chat/sessions/:sessionId/ask`
   - POST `{{baseUrl}}/chat/sessions/:sessionId/feedback`

3. Set variable: `baseUrl = http://localhost:5000/api`

### Using cURL

See examples above for each endpoint.

### Using JavaScript/Fetch

```javascript
// Ask a question
const response = await fetch(
  'http://localhost:5000/api/chat/sessions/sess-001/ask',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: 'What is React?' })
  }
);
const data = await response.json();
console.log(data);
```

---

## 📝 Notes

- All timestamps are in ISO 8601 format (UTC)
- Session IDs are generated with timestamp + random string for uniqueness
- Message IDs follow similar format: `msg-{uuid}`
- Table data structure varies based on the answer context
- No authentication required (development mode)
- All data is served from JSON files (no database)

---

## 🚀 Future Enhancements

- WebSocket support for real-time updates
- Authentication and authorization
- Database integration
- Advanced filtering and search
- Batch operations
- File upload support
- Message editing and deletion

---

**For more information, refer to the main README.md**
