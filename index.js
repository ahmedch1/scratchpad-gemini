const { GoogleGenerativeAI } =require('@google/generative-ai')
require('dotenv').config()

const fs=require('fs');

const genAI = new GoogleGenerativeAI(process.env.API_KEY)



async function run(){
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    const chat=model.startChat({
        history:[
            {
                role:"user",
                parts:"Hello , I have 2 cats in my house"
            },
            {
                role:"model",
                parts: "Great to meet you. What would you like to know"
            }
        ]
    })

    const msg= "How many paws are in my house ?"

    const result=await chat.sendMessage(msg)
    const response=await result.response
    const text=response.text()
    console.log(text)
}

run()