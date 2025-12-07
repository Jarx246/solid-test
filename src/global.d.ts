/// <reference types="@solidjs/start/env" />

interface ImportMetaEnv {
  // Add any other specific environment variables here if needed
  readonly SERVER_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
