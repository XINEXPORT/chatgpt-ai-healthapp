import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration ({
    organization: "",
    apiKey: "",
})

const openai = new OpenAIApi(configuration);

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    message: [{
        role:"user", 
        content: "Hello"
    }]
}).then((result)=>{
    console.log(result);
})
