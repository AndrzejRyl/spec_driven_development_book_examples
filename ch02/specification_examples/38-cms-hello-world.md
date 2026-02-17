# Spec: CMS Hello World Endpoint

**Version:** 1.0
**Status:** Draft

## 1. Overview

A minimal "Hello World" GET endpoint in the CMS app, protected by `IsCMSUser` permission. This spec serves as a demo for spec-driven development.

## 2. API Endpoints

### 2.1. Hello World

-   **Endpoint:** `GET /cms/hello/`
-   **Permission:** `IsCMSUser`
-   **Success Response (200 OK):**
    ```json
    {
      "message": "Hello, World!"
    }
    ```

## 3. Production Readiness & Safety

### 3.1. Caching Strategy

No caching needed — response is static.

### 3.2. Database Performance

No database queries.

## 4. Error Handling

-   **403 Forbidden:** Returned automatically by `IsCMSUser` if the user is not authenticated or not in the `CMS Access` group.
-   **500 Internal Server Error:** `{"error": "An unexpected error occurred."}`

## 5. Proposed File Structure

```
cms/
└── views/
    └── hello.py    # NEW
```

## 6. Implementation Plan

-   [ ] Create `cms/views/hello.py` with `HelloWorldView` (APIView, `permission_classes = [IsCMSUser]`)
-   [ ] Add `path('hello/', HelloWorldView.as_view())` to `cms/urls.py`

## 7. Learnings/Findings

_(To be filled during implementation.)_
