import { db } from "../name";
import creatAnswerCollection from "./answer.collection";
import creatCommentCollection from "./comment.collection";
import creatQuestionCollection from "./question.collections";
import createVoteCollection from "./vote.collection";

import { databases } from "./config";

export default async function getOrCreateDB(){
    try {
        await databases.get(db)
        console.log("Database Conneted")
    } catch(error){
        try {
            await databases.create(db, db)
            console.log("Database created")
            //create collection
            await Promise.all([
                creatQuestionCollection(),
                creatAnswerCollection(),
                creatCommentCollection(),
                createVoteCollection(),

            ])
            console.log("Collection created")
            console.log("Database connected")
        } catch (error) {
            console.log("Error creating databases or collection", error)
        }
    }

    return databases
}