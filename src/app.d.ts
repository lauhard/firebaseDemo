// See https://kit.svelte.dev/docs/types#app

import type { FirebaseError } from "firebase-admin";

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			error:FirebaseError
			error:Error
		}
		interface Locals {
			user:User,
			claims:Claims
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
