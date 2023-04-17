const url = 'https://futdb.app/api/'
import axios from 'axios';


export const futdbApi = axios.create({
    baseURL: url,
    headers: {
         'X-AUTH-TOKEN': '8e1e60d8-2a1f-4769-a8c4-0c287ec5695e'
      },
});
