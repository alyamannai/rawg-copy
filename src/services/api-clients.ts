import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"26bd9eb43eba46e48cf4f7234b991e1e"
    }
})