import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'e53d3005bc964e98bee1f78515e8bfca'
    }
})