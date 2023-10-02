const openai = require('../config/openaiConfig')

const generateMeta = async (title) => {



  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `Come up with a description for a YouTube video called ${title}`
      }
    ],
    max_tokens: 100
  });
  console.log(chatCompletion.choices[0].message);
}

const generateImage = async (desc) => {

    const image = await openai.images.generate({ prompt: desc });

    console.log(image.data);
  
  
  }



module.exports = { generateMeta,generateImage }