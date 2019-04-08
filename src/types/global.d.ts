import { AppState } from "~/client/models";

declare global {
  interface Window { __INITIAL_STATE__: AppState }
}