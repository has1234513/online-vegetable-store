import { defineEventHandler, readBody } from 'h3';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password, rememberMe } = body;

  // Generate a token
  const token = jwt.sign({ username }, 'your-secret-key', {
    expiresIn: rememberMe ? '30d' : '1h',
  });

  // Define the path for the data file
  const filePath = path.resolve('server/data/userData.json');

  // Initialize or read existing user data
  let existingData = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    existingData = fileContent ? JSON.parse(fileContent) : [];
  }

  // Check if the user already exists
  let user = existingData.find((u) => u.username === username);

  // If user does not exist, add them with a UUID
  if (!user) {
    user = {
      id: uuidv4(),
      username,
      password,
      rememberMe,
      token,
      timestamp: new Date().toISOString(),
    };
    existingData.push(user);
  } else {
    // If user exists, update their data (optional)
    user.password = password;
    user.rememberMe = rememberMe;
    user.token = token;
    user.timestamp = new Date().toISOString();
  }

  // Write the updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');

  return { success: true, token, userId: user.id };
});
