import { test } from "../esm/index.js";
import dotenv from "dotenv";
import { PLATFORM } from "jnu-abc";
dotenv.config({path: `../.env.${PLATFORM}`});

const {GOOGLE_SCOPE_DIR, GOOGLE_AUTH_DIR } = process.env;

test();
