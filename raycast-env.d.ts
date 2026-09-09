/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {
  /** GIPHY API Key - API key from developers.giphy.com. */
  "giphyApiKey"?: string,
  /** KLIPY API Key - App key from the KLIPY Partner Panel. */
  "klipyApiKey"?: string,
  /** Jina AI API Key - API key for visual semantic search of saved media. */
  "jinaApiKey"?: string
}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
}
