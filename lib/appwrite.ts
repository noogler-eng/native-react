import { Client, Account, Avatars } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

export const acount = new Account(client);
export const avatars = new Avatars(client);
