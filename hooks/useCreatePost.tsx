import { database, storage, ID } from "@/libs/AppWriteClient"
// import { Client, Databases, Permission, Role } from "appwrite";

const useCreatePost = async (file: File, userId: string, caption: string) => {
    let videoId = Math.random().toString(36).slice(2, 22)

    try {
        await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_POST), 
            ID.unique(), 
        {
            user_id: userId,
            text: caption,
            video_url: videoId,
            created_at: new Date().toISOString(),
        });
        await storage.createFile(String(process.env.NEXT_PUBLIC_BUCKET_ID), videoId, file)
    } catch (error) {
        throw error
    }
}

export default useCreatePost


        
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('<PROJECT_ID>');

// const databases = new Databases(client);

// let promise = databases.createDocument(
//     '<DATABASE_ID>',
//     '<COLLECTION_ID>',
//     {'actorName': 'Chris Evans', 'height': 183},
//     [
//         Permission.read(Role.any()),                  // Anyone can view this document
//         Permission.update(Role.team("writers")),      // Writers can update this document
//         Permission.update(Role.team("admin")),        // Admins can update this document
//         Permission.delete(Role.user("5c1f88b42259e")), // User 5c1f88b42259e can delete this document
//         Permission.delete(Role.team("admin"))          // Admins can delete this document
//     ]
// );

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });
