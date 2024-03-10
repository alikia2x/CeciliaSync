import { Queue, Worker } from "bullmq";
import * as path from "path";

const syncQueue = new Queue("Files", {
    connection: {
        host: "127.0.0.1",
        port: 6379
    }
});

async function addSource(sourcePath: string) {
    await syncQueue.add("initSync", { source: sourcePath }, { priority: 100 });
}

const worker = new Worker(
    "Files",
    async (job) => {
        console.log("Process");
        console.log(job.name, job.data);
    },
    {
        connection: {
            host: "127.0.0.1",
            port: 6379
        }
    }
);
worker.on("completed", (job) => {
    console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
    console.log(`${job?.id} has failed with ${err.message}`);
});

export default defineEventHandler(async (event) => {
    if (!event.context.params?.path) {
        throw createError({
            statusCode: 404,
            statusMessage: "Path not provided."
        });
    }
    const sourcePath: string = path.join(
        "/",
        decodeURI(event.context.params.path)
    );
    await addSource(sourcePath);
    return { success: true };
});
