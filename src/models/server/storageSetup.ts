import {IndexType, Permission} from "node-appwrite";
import{questionAttachmentBucket} from "../name";
import { databases, storage } from "./config";

export default async function getOrCreatStorage() {
    try{
        await storage.getBucket(questionAttachmentBucket);
        console.log("storage connected");
    } catch(error){
        try {
            await storage.createBucket(questionAttachmentBucket, questionAttachmentBucket, 
            [
                Permission.create("users"),
                Permission.read("any"),
                Permission.read("users"),
                Permission.update("users"),
                Permission.delete("users"),
            ],
            false,
            undefined,
            undefined,
            ["jpg", "png", "gif", "jpeg", "webp", "heic"]
        );

        console.log("Storage created");
        console.log("Storage connected");
        } catch(error) {
            console.log("Error creating storage : ", error);
        }
    }
}