import axios from "axios";

function postUpdateRequest (method, url, data, logic){
  try{
    axios({
        method,
        url,
        data: {
          ...data
        }
      })
      logic()
    }catch(err){
      console.log(err)
    }
}
export default postUpdateRequest;