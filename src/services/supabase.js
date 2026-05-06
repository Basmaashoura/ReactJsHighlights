import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mxaxqbvrqxxcuzqslngl.supabase.co";
const supabaseKey = "sb_publishable_fOOno1rVV0nNIu5nId1yJA_qp3l57cM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
