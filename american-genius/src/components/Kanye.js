import axios from 'axios';

export const kanye = async () => {
   try {
     const res = await axios.get(`https://api.kanye.rest/`)
    return res
  } catch(e) {
    console.log(e)
  }
}
