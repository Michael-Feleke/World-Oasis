import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gyqsivwtqkiceoypbnjk.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5cXNpdnd0cWtpY2VveXBibmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0ODMyNzEsImV4cCI6MjAxOTA1OTI3MX0.1HujkpMMmwP_NT77NRfOh4EQpGv9yMv86DNyZB6Yx_s`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
