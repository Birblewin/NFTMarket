/* eslint-disable no-undef */
// IMPORTING NECESSARY MODULES
import { createClient } from "@supabase/supabase-js";

// A VARIABLE TO HOLD THE ENV VARIABLES
  // LOADING THE DATABASE URL
const supabaseURL = import.meta.env.VITE_DATABASE_PROJECT_URL
  // LOADING THE DATABASE ANONYMOUS KEY
const supabaseKey = import.meta.env.VITE_DATABASE_API_KEY

// CREATING A SUPABASE CLIENT
const supabase = createClient(supabaseURL, supabaseKey);

// EXPORTING THE SUPABASE CLIENT
export default supabase