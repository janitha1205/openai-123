const openai = require('../config/openaiConfig')

const generateMeta = async (req,res) => {

const {title}= req.body;

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
  res.status(200).json({description: chatCompletion.choices[0].message});
}

const generateImage = async (req,res) => {

    const image = await openai.images.generate({ prompt: req.body.prompt });

    res.json({url:image.data});
  
  
  }



module.exports = { generateMeta,generateImage }