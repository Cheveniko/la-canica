import { BlobServiceClient } from "@azure/storage-blob";

import { v4 as uuidv4 } from "uuid";

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING!;
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME!;

export const uploadImageToBlobStorage = async (file: File) => {
  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const newFilename = uuidv4() + "." + file.name.split(".").pop();

  const blobClient = containerClient.getBlockBlobClient(newFilename);
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  const buffer = Buffer.from(await file.arrayBuffer());

  await blobClient.uploadData(buffer, options);

  return blobClient.url;
};
