/* eslint-disable no-undef */
// IMPORTING NECESSARY MODULES
import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv'

// ACCESSING ALL ENV VALUES
dotenv.config()

// A VARIABLE TO HOLD THE ENV VARIABLES
  // LOADING THE DATABASE URL
const supabaseURL = process.env.DATABASE_PROJECT_URL
  // LOADING THE DATABASE ANONYMOUS KEY
const supabaseKey = process.env.DATABASE_API_KEY

// CREATING A SUPABASE CLIENT
const supabase = createClient(supabaseURL, supabaseKey);

// EXPORTING THE SUPABASE CLIENT
module.exports = supabase