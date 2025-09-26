import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//função para a criação de um contato
async function createContact(name, number){
    const { error } = await supabase
    .from('contacts')
    .insert({ name: name ,phone_number: number })
    return(error)
}
//função para a leitura de contatos
async function readContacts(){
    const { data, error } = await supabase
    .from('contacts')
    .select() 
    return({data, error})
}

export default {createContact, readContacts}