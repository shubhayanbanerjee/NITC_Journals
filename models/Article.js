const mongoose = require("mongoose")
const ArticleSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true
    },
    body : {
        type: String,
        required: true,
    },
    status:
    {
        type: String,
        default: "public",
        enum: ["public", "private"]
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
     comments : [{
        text : String,
        postedBy :
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Article", ArticleSchema)