const Design = require("../models/Design");
const User = require("../models/User");
const dotenv = require('dotenv')

dotenv.config()

const API_KEY = process.env.API_KEY;


const createUser = async (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");
    if (req.body.name && req.body.role&&req.headers.apikey === API_KEY) {
      const newUser = new User({
          userId:`${Math.random() * 1e18}`,
          name:req.body.name,
          role:req.body.role,
          profileImage:req.body.profileurl ??"",
          behance:"",
          bio:"",
          facebook:"",
          website:"",
          github:"",
          instagram:"",
          linkedIn:"",
          twitter:"",
      })
      const user = await newUser.save()
      res.status(201).json(user);
    } else {
        res.status(400).json({error:"Not Authorized"})
    }
    } catch (error) {
      res.json(400).json({ error: error.message });
    
    }
  }

  const updateUser = async(req,res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    if(req.body.userid && req.headers.apikey === API_KEY){
        const user = await User.findOne({userId:req.body.userid})
        user.name = req.body.name?req.body.name:user.name;
        user.bio = req.body.bio?req.body.bio:user.bio;
        user.website = req.body.website?req.body.website:user.website;
        user.github = req.body.github?req.body.github:user.github;
        user.twitter = req.body.twitter?req.body.twitter:user.twitter;
        user.facebook = req.body.facebook?req.body.facebook:user.facebook;
        user.linkedIn = req.body.linkedIn?req.body.linkedIn:user.linkedIn;
        user.behance = req.body.behance?req.body.behance:user.behance;
        user.instagram = req.body.instagram?req.body.instagram:user.instagram;
        user.profileImage = req.body.profileImage?req.body.profileImage:user.profileImage;
        const updated = await user.save();
        res.status(201).json(updated)
    }
    else {
        res.status(400).json({error:"Not Authorized"})
    }
  } catch (error) {
    res.status(400).json({error:error.message})
    
  }
}

const createDesign = async(req,res) => {
    try {
        res.setHeader("Content-Type", "application/json");

        if(req.body.name&& req.body.description&&req.body.images&&req.body.levels&&req.body.tools&&req.body.creator&&req.headers.apikey === API_KEY){
            const newDesign = new Design({
                designId:`${Math.random() * 1e18}`,
                name:req.body.name,
                description:req.body.description,
                images:req.body.images,
                levels:req.body.levels,
                tools:req.body.tools,
                creator:req.body.creator
            })
            const design = await newDesign.save();
            res.status(201).json(design)
        }
        else {
            res.status(400).json({error:"Not Authorized"})
        }

    } catch (error) {
      res.json(400).json({ error: error.message});
    }
}

const getDesign = async(req,res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        if(req.query.designId && req.headers.apikey === API_KEY){
           const design = await Design.findOne({designId:req.query.designId})
           res.status(200).json(design)
        }
        else {
            res.status(400).json({error:"Not Authorized"})
        }
      } catch (error) {
        res.status(400).json({error:error.message})
        
      }
}

const getUser = async(req,res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        if(req.query.userId && req.headers.apikey === API_KEY){
           const user = await User.findOne({userId:req.query.userId})
           res.status(200).json(user)
        }
        else {
            res.status(400).json({error:"Not Authorized"})
        }
      } catch (error) {
        res.status(400).json({error:error.message})
        
      }
}

const getDesigns = async(req,res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        if(req.headers.apikey === API_KEY){
           Design.collection.find().toArray((err, data) => {
            res.status(200).json(data);
          });
        }
        else {
            res.status(400).json({error:"Not Authorized"})
        }
      } catch (error) {
        res.status(400).json({error:error.message})
        
      }
}

module.exports = {createUser,updateUser,createDesign,getDesign,getUser,getDesigns}