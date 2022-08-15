import {PostModel} from '../models/posts.js';
import path from 'path';


const indexView = async (req, res) => {
  try {
      let posts = await PostModel.find({deletedAt: null}).sort({"createdAt": -1});
      let arr = posts ? posts : [];
      return res.json({
        ok:true, data: {
          arr
        }
      })
  }catch (e) {
      console.log(e)
      return res.json({
          ok: false, data: {
              message: "xatolik"
          }
      })
  }
};

const createViewPOST = async (req, res) => {
const {theme, title, description} = req.body
try {
        let newPost = new PostModel({
            theme: theme ? theme : "",
            title: title ? title : "",
            description: description ? description : "",
            createdAt: Date.now()
        })
        await newPost.save()
         return res.json({
          ok:true, data: {
            newPost
          }
         })
} catch (e) {
    console.log(e)
    return res.json({ok: false, data:{
      message: "xatolik"
    }})
}
}


const updateViewPOST = async (req, res) => {
  try {
      const {_id, theme, title, description} = req.body
      
      if(_id){
              await PostModel.updateOne({_id: _id}, {
                  theme:theme,
                  title:title,
                  description:description,
                  updatedAt: Date.now()
              })

              return res.json({
                ok:true, data: {
                  "message": "o'zgartirildi"
                }
              })
          }else{
          throw Error('xatolik')
      }
      

  }catch (e) {
      console.log(e)
      res.status(404)
      return res.redirect({
        ok:false, data: {
          "message": "xatolik"
        }
      })
  }
}


const deleteViewGET = async (req, res) => {
  try {
      const {id} = req.params
       await PostModel.deleteOne({_id:id});
      
       return res.json({
        ok:true, data: {
          message: "o'chirildi"
        }
       })
  }catch (e) {
    return res.json({
      ok:false, data: {
        message: "xatoliki"
      }
     })
  }
}




export {
  indexView,
  createViewPOST,
  updateViewPOST,
  deleteViewGET
}